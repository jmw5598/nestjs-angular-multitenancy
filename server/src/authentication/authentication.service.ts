import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RefreshTokensService } from './services/refresh-tokens.service';
import { User } from '../database/entities/tenant/user.entity';
import { RefreshToken } from '../database/entities/tenant/refresh-token.entity';
import { AuthenticatedUser } from './models/authenticated-user.model';
import * as bcrypt from 'bcrypt';
import { UserDetails } from './models/user-details.model';
import { InvalidUsernamePasswordException } from './exceptions/invalid-username-password.exception';
import { UserSettings } from './models/user-settings.model';
import { Roles } from './models/roles.enum';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';
import { Tenant } from 'src/database/entities/common/tenant.entity';

@TenantService()
export class AuthenticationService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly refreshTokensService: RefreshTokensService,
  ) {}

  public async validateUser(username: string, password: string, requestedRole: Roles): Promise<any> {
    const user: User = await this.userService.findByUsername(username.trim().toLowerCase());

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new InvalidUsernamePasswordException();
    }

    // @TODO - determine if user is disabled?

    const { password: storedPassword, resetToken, ...result } = user;
    return result;
  }

  public async login(user: User, tenant: Tenant): Promise<AuthenticatedUser> {
    return this._generateAuthenticatedUser(user, tenant);
  }

  public async refreshToken(accessToken: string, refreshToken: string, tenant: Tenant): Promise<AuthenticatedUser> {
    const tokenPayload: any = this.jwtService.decode(accessToken);
    const tokenInDb: RefreshToken = await this.refreshTokensService.findByRefreshTokenAndUserId(refreshToken, tokenPayload.sub);
    const user: User = await this.userService.findByUsername(tokenPayload.username);

    if (!tokenInDb || !user || tokenInDb.isBlacklisted) { 
      throw new BadRequestException('Unable to refresh token');
    }

    return this._generateAuthenticatedUser(user, tenant);
  }

  private async _generateAuthenticatedUser(user: User, tenant: Tenant): Promise<AuthenticatedUser> {
    const expiresIn: string = '1h';
    return {
      accessToken: await this._getAccessToken(user, tenant, expiresIn),
      refreshToken: await this._getRefreshToken(user),
      prefix: 'Bearer',
      expiresIn: expiresIn,
      userDetails: await this._getUserDetails(user, tenant)
    } as AuthenticatedUser;
  }

  private async _getAccessToken(user: User, tenant: Tenant, expiresIn: string): Promise<string> {
    const roles: string[] = user.roles.map(e => e.name);
    const payload = { 
      username: user.username, 
      sub: user.id, 
      roles: roles, 
      tid: tenant?.identifier
    };
    return this.jwtService.sign(payload, { expiresIn: expiresIn });
  }
  
  private async _getRefreshToken(user: User): Promise<string> {
    let refreshToken: RefreshToken = await this.refreshTokensService.findNonBlacklistedByUserId(user.id);
    if (!refreshToken) {
      refreshToken = await this.refreshTokensService.createNewRefreshToken(user.id);
    }
    return refreshToken.refreshToken;
  }

  private async _getUserDetails(user: User, tenant: Tenant): Promise<UserDetails> {
    const roles: string[] = user.roles.map(e => e.name);
    return {
      id: user.id,
      username: user.username,
      roles: roles,
      settings: { 
        // @TODO
        // Add user settings here?
        // Add claims?
      } as UserSettings,
      tenant: tenant
    } as UserDetails
  }
}

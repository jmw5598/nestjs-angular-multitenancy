import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Request } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { Roles } from '../models/roles.enum';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({ passReqToCallback: true });
  }

  public async validate(request: any): Promise<any> {
    const username: string = request.body.username;
    const password: string = request.body.password;
    const requestedRole: Roles = request.body.requestedRole || Roles.USER;
    const user = await this.authenticationService.validateUser(username, password, requestedRole);
    if (!user) {
      throw new UnauthorizedException("Invalid usernamem, password, or permission!");
    }
    return user;
  }
}

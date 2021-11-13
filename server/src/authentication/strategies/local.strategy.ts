import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Request } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { Roles } from '../models/roles.enum';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({ passReqToCallback: true });
  }

  public async validate(request: any): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authenticationService: AuthenticationService = await this.moduleRef.resolve(AuthenticationService, contextId);
    const username: string = request.body.username;
    const password: string = request.body.password;
    const requestedRole: Roles = request.body.requestedRole || Roles.USER;
    const user = await authenticationService.validateUser(username, password, requestedRole);
    if (!user) {
      throw new UnauthorizedException("Invalid usernamem, password, or permission!");
    }
    return user;
  }
}

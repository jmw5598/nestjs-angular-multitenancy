import { UnauthorizedException } from '@nestjs/common';

export class InvalidUsernamePasswordException extends UnauthorizedException {
  constructor() {
    super(`Invalid username or password!`);
  }
}

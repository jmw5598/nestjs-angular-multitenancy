import { UnauthorizedException } from '@nestjs/common';

export class UnconfirmedAccountException extends UnauthorizedException {
  constructor() {
    super(`Please confirm your email before signing in!`);
  }
}

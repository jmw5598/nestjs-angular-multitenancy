import { UnauthorizedException } from '@nestjs/common';

export class AccountDisabledException extends UnauthorizedException {
  constructor() {
    super(`This account has been disabled!`);
  }
}
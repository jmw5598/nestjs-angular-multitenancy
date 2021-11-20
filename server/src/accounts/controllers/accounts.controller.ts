import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get()
  public async getAccountDevices(): Promise<any> {
    return 'Got account profile';
  }
}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('accounts/:accountId/profiles')
export class ProfilesController {
  @Get()
  public async getAccountDevices(@Param('accountId') accountId: string): Promise<any> {
    return `Got account profile (${accountId})`;
  }
}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('accounts/:accountId/devices')
export class DevicesController {
  @Get()
  public async getAccountDevices(@Param('accountId') accountId: string): Promise<any> {
    return `Got account devices (${accountId})`;
  }
}

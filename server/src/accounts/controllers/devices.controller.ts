import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';

import { DeviceCode } from 'src/database/entities/tenant/device-code.entity';
import { CreateDeviceCodeDto } from '../dtos/create-device-code.dto';
import { DevicesService } from '../services/devices.service';

@Controller('accounts/devices')
export class DevicesController {
  constructor(
    private readonly _deviceService: DevicesService
  ) { }

  @Get()
  public async getAccountDevices(@Param('accountId') accountId: string): Promise<any> {
    return `Got account devices (${accountId})`;
  }

  @Post()
  public async saveDeviceCode(@Body() createDeviceCodeDto: CreateDeviceCodeDto): Promise<DeviceCode> {
    try {
      return this._deviceService.save(createDeviceCodeDto);
    } catch (error) {
      // @TODO Log error here
      throw new BadRequestException(`Error adding device code!`);
    }
  }
}

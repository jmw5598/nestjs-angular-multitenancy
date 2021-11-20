import { Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';

import { DeviceCode } from 'src/database/entities/tenant/device-code.entity';
import { CreateDeviceCodeDto } from '../dtos/create-device-code.dto';

@TenantService()
export class DevicesService {
  private readonly _deviceCodesRepository: Repository<DeviceCode>;

  constructor(@Inject(TENANT_CONNECTION) private readonly _connection: Connection) {
    this._deviceCodesRepository = this._connection.getRepository(DeviceCode);
  }

  public async save(createDeviceCodeDto: CreateDeviceCodeDto): Promise<DeviceCode> {
    const existingDeviceCode: DeviceCode = await this._deviceCodesRepository.findOne({ token: createDeviceCodeDto.token });

    if (existingDeviceCode) return existingDeviceCode;

    return this._deviceCodesRepository.save(
      this._deviceCodesRepository.create({
        token: createDeviceCodeDto.token
      })
    );
  }
}

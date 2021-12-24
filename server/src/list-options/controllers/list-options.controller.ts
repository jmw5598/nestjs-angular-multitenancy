import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';

import { XyzLoggerService } from 'src/common/logger/xyz-logger.service';
import { User } from 'src/database/entities/tenant/user.entity';

import { ListOption } from '../dtos/list-options.dto';
import { ListOptionsService } from '../services/list-options.service';

@UseGuards(JwtAuthenticationGuard)
@Controller('list-options')
export class ListOptionsController {
  constructor(
    private readonly _logger: XyzLoggerService,
    private readonly _listOptionsService: ListOptionsService
  ) {
    this._logger.setContext(this.constructor.name);
  }

  @Get('users')
  public async getUserListOptions(): Promise<ListOption<Partial<User>>[]> {
    try {
      return this._listOptionsService.getUsersListOptions();
    } catch (error) {
      this._logger.error(`Error getting user list options`, error);
      throw error;
    }
  }
}

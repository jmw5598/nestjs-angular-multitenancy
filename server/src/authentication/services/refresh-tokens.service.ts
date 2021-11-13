import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { RefreshToken } from '../../database/entities/tenant/refresh-token.entity';
import { v4 as uuid } from 'uuid';
import { Tenant } from 'src/database/entities/common/tenant.entity';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';
import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';

@TenantService()
export class RefreshTokensService {
  private readonly refreshTokenRepository: Repository<RefreshToken>;

  constructor(@Inject(TENANT_CONNECTION) private readonly connection: Connection) {
    this.refreshTokenRepository = this.connection.getRepository(RefreshToken);
  }

  public async findByRefreshTokenAndUserId(refreshToken: string, userId: string): Promise<RefreshToken> {
    return this.refreshTokenRepository.findOne({ 
      refreshToken: refreshToken, 
      user: { id: userId }
    });
  }

  public async findNonBlacklistedByUserId(userId: string): Promise<RefreshToken> {
    return this.refreshTokenRepository.findOne({
      isBlacklisted: false,
      user: { id: userId }
    });
  }

  public async createNewRefreshToken(userId: string): Promise<RefreshToken> {
    const refreshToken: RefreshToken = this.refreshTokenRepository.create({
      refreshToken: uuid(),
      user: { id: userId }
    });
    return this.refreshTokenRepository.save(refreshToken);
  }
}

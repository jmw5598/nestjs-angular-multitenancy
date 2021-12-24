import { Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';
import { ListOption } from '../dtos/list-options.dto';
import { User } from 'src/database/entities/tenant/user.entity';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';

@TenantService()
export class ListOptionsService {
  constructor(
    @Inject(TENANT_CONNECTION)
    private readonly _connection: Connection
  ) { }

  public async getUsersListOptions(): Promise<ListOption<Partial<User>>[]> {
    const usersRepository: Repository<User> = this._connection.getRepository(User);
    return usersRepository.find({
        relations: ['profile']
      })
      .then(users => {
        return users.map(user => ({
          label: (user?.profile?.firstName + ' ' + user?.profile?.lastName) || user?.username,
          value: {
            id: user.id,
            username: user.username
          } as Partial<User>
        } as ListOption<Partial<User>>))
      })
  }
}

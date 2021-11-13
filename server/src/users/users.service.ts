import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/authentication/models/roles.enum';
import { Repository } from 'typeorm';
import { User } from '../database/entities/tenant/user.entity'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  
  public async findByUsername(username: string): Promise<User | undefined> {
    return (await this.usersRepository.find({
      relations: ['roles'],
      where: { username: username },
      take: 1
    }))[0];
  }

  public async findByUsernameAndRequestedRole(username: string, requestedRole: Roles): Promise<User | undefined> {
    const user: User = await this.usersRepository.findOne({
      relations: ['roles'],
      where: { 
        username: username
      }
    });
    const userRoles = user?.roles?.map(role => role.name);
    return user && userRoles.includes(requestedRole) ? user : undefined;
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }
}

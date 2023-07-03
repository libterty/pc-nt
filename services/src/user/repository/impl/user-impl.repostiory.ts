import { Injectable, Inject } from '@nestjs/common'
import { Connection, SelectQueryBuilder } from 'typeorm'
import * as bcrypt from 'bcrypt'
import User from '@server/user/entity/user.entity'
import {
  CreateUserInput,
  FindUsersQuery,
  UserRepository,
} from '@server/user/repository/user.repository'
import { InjectConnection } from '@nestjs/typeorm'

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  public constructor(
    @InjectConnection('USER_CONNECTION')
    private readonly connection: Connection
  ) {}

  public async createUser(input: CreateUserInput): Promise<User> {
    const user = new User()
    user.name = input.name.trim()
    user.email = input.email.toLowerCase()
    user.salt = await bcrypt.genSalt(10)
    user.password = await this.hashPassword(input.password, user.salt)
    return this.connection.getRepository(User).save(user)
  }

  public findUsersByQuery(query: FindUsersQuery): Promise<User[]> {
    try {
      const qb: SelectQueryBuilder<User> = this.connection
      .getRepository(User)
      .createQueryBuilder('users')
    if (query.keyword) {
      qb.where('(users.name ILIKE :keyword OR users.email ILIKE :keyword OR)', {
        keyword: `%${query.keyword}%`,
      })
    }
    return qb
      .select([
        'users.id AS "id"',
        'users.name AS "name"',
        'users.email AS "email"',
        'users.created_at AS "created_at"',
        'users.updated_at AS "updated_at"',
      ])
      .getRawMany()
    } catch (error) {
      console.trace('ero', error)
    }
  }

  public findUserById(id: string): Promise<User> {
    return this.connection
      .getRepository(User)
      .createQueryBuilder('users')
      .where('users.id = :id', { id })
      .select([
        'users.id AS "id"',
        'users.name AS "name"',
        'users.email AS "email"',
        'users.created_at AS "created_at"',
        'users.updated_at AS "updated_at"',
      ])
      .getRawOne()
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt)
  }
}

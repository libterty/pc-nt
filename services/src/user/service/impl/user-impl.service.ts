import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { UserRepository } from '@server/user/repository/user.repository'
import { UserService } from '@server/user/service/user.service'
import { UserMapper } from '@server/user/mapper/user.mapper'
import { USER_REPOSITORY, USER_DATA_MAPPER } from '@server/constaint'
import { CreateUserDto } from '@server/user/dto/create-user.dto'
import { UserRODTO } from '@server/user/dto/user-ro.dto'
import { QueryUserDto } from '@server/user/dto/query-user.dto'

@Injectable()
export class UserServiceImpl implements UserService {
  public constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,

    @Inject(USER_DATA_MAPPER)
    private readonly userMapper: UserMapper,
  ) {}

  public async createUser(input: CreateUserDto): Promise<UserRODTO> {
    try {
      const user = await this.userRepository.createUser(input)
      return this.userMapper.toDTO(user)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  public async findUsersByQuery(query: QueryUserDto): Promise<UserRODTO[]> {
    try {
      const users = await this.userRepository.findUsersByQuery(query)
      return users.map((user) => this.userMapper.toDTO(user))
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  public async findUserById(id: string): Promise<UserRODTO> {
    try {
      const user = await this.userRepository.findUserById(id)
      if (!user) throw new Error(`User ${id} not found`)
      return this.userMapper.toDTO(user)
    } catch (error) {
      if (error.message.includes('not found')) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error)
    }
  }
}

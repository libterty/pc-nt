import { QueryUserDto } from '@server/user/dto/query-user.dto'
import { CreateUserDto } from '@server/user/dto/create-user.dto'
import { UserRODTO } from '@server/user/dto/user-ro.dto'

export interface UserService {
  findUsersByQuery(query: QueryUserDto): Promise<UserRODTO[]>
  findUserById(id: string): Promise<UserRODTO>
  createUser(input: CreateUserDto): Promise<UserRODTO>
}

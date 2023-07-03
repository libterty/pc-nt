import User from '@server/user/entity/user.entity'

export type FindUsersQuery = {
  keyword?: string
}

export type CreateUserInput = {
  name: string
  email: string
  password: string
}

export interface UserRepository {
  findUsersByQuery(query: FindUsersQuery): Promise<User[]>
  findUserById(UserId: string, rejectOnNotFound?: boolean): Promise<User>
  createUser(input: CreateUserInput): Promise<User>
}

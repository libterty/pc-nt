import User from '@server/user/entity/user.entity'
import { UserRODTO } from '@server/user/dto/user-ro.dto'

export interface UserMapper {
  toDTO(entity: User): UserRODTO
}

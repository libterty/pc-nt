import { Injectable } from '@nestjs/common'
import User from '@server/user/entity/user.entity'
import { UserRODTO } from '@server/user/dto/user-ro.dto'

@Injectable()
export class UserMapperImpl {
  public toDTO(entity: User): UserRODTO {
    return {
      id: entity.id,
      name: entity.name,
      nickName: entity.nick_name || null,
      email: entity.email,
      createdAt: entity.created_at.toISOString(),
      updatedAt: entity.updated_at.toISOString(),
    }
  }
}

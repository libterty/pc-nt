import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import User from '@server/user/entity/user.entity'
import { UserRepositoryImpl } from '@server/user/repository/impl/user-impl.repostiory'
import { UserServiceImpl } from '@server/user/service/impl/user-impl.service'
import { UserMapperImpl } from '@server/user/mapper/impl/user-impl.mapper'
import { UserController } from '@server/user/controller/user.controller'
import { USER_SERVICE, USER_CONNECTION, USER_REPOSITORY, USER_DATA_MAPPER } from '@server/constaint'

@Module({
  imports: [TypeOrmModule.forFeature([User], 'USER_CONNECTION')],
  controllers: [UserController],
  providers: [
    {
      provide: USER_SERVICE,
      useClass: UserServiceImpl,
    },
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
    {
      provide: USER_DATA_MAPPER,
      useClass: UserMapperImpl,
    },
  ],
})
export class UserModule {}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormConfig } from '@server/config/orm.config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { UserModule } from '@server/user/user.module'

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig as MysqlConnectionOptions), UserModule],
})
export class AppModule {}

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { config } from '@server/config/general'
import User from '@server/user/entity/user.entity'

export const ormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  name: 'USER_CONNECTION',
  host: config.DB_SETTINGS.host,
  port: config.DB_SETTINGS.port,
  username: config.DB_SETTINGS.username,
  password: config.DB_SETTINGS.password,
  database: config.DB_SETTINGS.database,
  entities: [User],
  subscribers: [],
  synchronize: true,
  logging: ['warn', 'error'],
  ssl: true,
}

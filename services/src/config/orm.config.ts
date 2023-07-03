
import { config } from '@server/config/general'
import User from '@server/user/entity/user.entity'

export const ormConfig = {
  type: 'mysql',
  name: 'USER_CONNECTION',
  host: config.DB_SETTINGS.host,
  port: config.DB_SETTINGS.port,
  username: 'root',
  password: 'root',
  database: 'msql_project',
  entities: [User],
  subscribers: [],
  synchronize: true,
  logging: ['warn', 'error'],
}

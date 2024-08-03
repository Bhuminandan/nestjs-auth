import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ENV_VARIABLES } from '../../utils/constants';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>(ENV_VARIABLES.DB_HOST),
  port: configService.get<number>(ENV_VARIABLES.DB_PORT),
  username: configService.get<string>(ENV_VARIABLES.DB_USERNAME),
  password: configService.get<string>(ENV_VARIABLES.DB_PASSWORD),
  database: configService.get<string>(ENV_VARIABLES.DB_NAME),
  entities: [
    User,
  ],
  logging: false,
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

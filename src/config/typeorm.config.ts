import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User, Kategori, Berita } from '../entities';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: (process.env.DB_TYPE as any) || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin123',
  database: process.env.DB_NAME || 'postgres',
  entities: [User, Kategori, Berita],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
};
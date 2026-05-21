async function name(params:type) {
  import { TypeOrmModuleOptions } from '@nestjs/typeorm';
  import { User, Kategori, Berita } from '../entities';
  
  export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: process.env.DB_NAME || 'prokopim.db',
    entities: [User, Kategori, Berita],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV !== 'production',
  };
  
}
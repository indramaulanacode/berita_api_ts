import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './modules/users.module';
import { KategoriModule } from './modules/kategori.module';
import { BeritaModule } from './modules/berita.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: process.env.DB_TYPE as 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
}),
    UsersModule,
    KategoriModule,
    BeritaModule,
  ],
})

export class AppModule {}

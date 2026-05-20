import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './modules/users.module';
import { KategoriModule } from './modules/kategori.module';
import { BeritaModule } from './modules/berita.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    KategoriModule,
    BeritaModule,
  ],
})
export class AppModule {}

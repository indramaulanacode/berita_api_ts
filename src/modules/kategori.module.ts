import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KategoriController } from '../controllers/kategori.controller';
import { KategoriService } from '../services/kategori.service';
import { Kategori } from '../entities/kategori.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kategori])],
  controllers: [KategoriController],
  providers: [KategoriService],
  exports: [KategoriService],
})
export class KategoriModule {}

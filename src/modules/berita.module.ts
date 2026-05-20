import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeritaController } from '../controllers/berita.controller';
import { BeritaService } from '../services/berita.service';
import { Berita } from '../entities/berita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Berita])],
  controllers: [BeritaController],
  providers: [BeritaService],
  exports: [BeritaService],
})
export class BeritaModule {}

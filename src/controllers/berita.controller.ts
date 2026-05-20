import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { BeritaService } from '../services/berita.service';
import { CreateBeritaDto, UpdateBeritaDto } from '../dtos';
import { Berita } from '../entities/berita.entity';

@Controller('berita')
export class BeritaController {
  constructor(private readonly beritaService: BeritaService) {}

  @Post()
  create(@Body() createBeritaDto: CreateBeritaDto): Promise<Berita> {
    return this.beritaService.create(createBeritaDto);
  }

  @Get()
  async findAll(
    @Query('status') status?: string,
    @Query('kategori_id') kategori_id?: string,
  ): Promise<Berita[]> {
    if (status) {
      return this.beritaService.findByStatus(status);
    }
    if (kategori_id) {
      return this.beritaService.findByKategori(parseInt(kategori_id, 10));
    }
    return this.beritaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Berita> {
    return this.beritaService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBeritaDto: UpdateBeritaDto,
  ): Promise<Berita> {
    return this.beritaService.update(id, updateBeritaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.beritaService.remove(id);
  }
}

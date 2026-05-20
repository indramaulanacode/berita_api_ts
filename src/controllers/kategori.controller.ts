import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { KategoriService } from '../services/kategori.service';
import { CreateKategoriDto, UpdateKategoriDto } from '../dtos';
import { Kategori } from '../entities/kategori.entity';

@Controller('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  @Post()
  create(@Body() createKategoriDto: CreateKategoriDto): Promise<Kategori> {
    return this.kategoriService.create(createKategoriDto);
  }

  @Get()
  findAll(): Promise<Kategori[]> {
    return this.kategoriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Kategori> {
    return this.kategoriService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKategoriDto: UpdateKategoriDto,
  ): Promise<Kategori> {
    return this.kategoriService.update(id, updateKategoriDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.kategoriService.remove(id);
  }
}

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kategori } from '../entities/kategori.entity';
import { CreateKategoriDto, UpdateKategoriDto } from '../dtos';

@Injectable()
export class KategoriService {
  constructor(
    @InjectRepository(Kategori)
    private kategoriRepository: Repository<Kategori>,
  ) {}

  async create(createKategoriDto: CreateKategoriDto): Promise<Kategori> {
    const existingKategori = await this.kategoriRepository.findOne({
      where: { slug: createKategoriDto.slug },
    });

    if (existingKategori) {
      throw new BadRequestException('Kategori slug already exists');
    }

    const kategori = this.kategoriRepository.create(createKategoriDto);
    return this.kategoriRepository.save(kategori);
  }

  async findAll(): Promise<Kategori[]> {
    return this.kategoriRepository.find();
  }

  async findOne(id: number): Promise<Kategori> {
    const kategori = await this.kategoriRepository.findOne({
      where: { id },
    });

    if (!kategori) {
      throw new NotFoundException(`Kategori with ID ${id} not found`);
    }

    return kategori;
  }

  async update(id: number, updateKategoriDto: UpdateKategoriDto): Promise<Kategori> {
    const kategori = await this.findOne(id);
    Object.assign(kategori, updateKategoriDto);
    return this.kategoriRepository.save(kategori);
  }

  async remove(id: number): Promise<void> {
    const kategori = await this.findOne(id);
    await this.kategoriRepository.remove(kategori);
  }
}

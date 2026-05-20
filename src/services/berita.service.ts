import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Berita } from '../entities/berita.entity';
import { CreateBeritaDto, UpdateBeritaDto } from '../dtos';

@Injectable()
export class BeritaService {
  constructor(
    @InjectRepository(Berita)
    private beritaRepository: Repository<Berita>,
  ) {}

  async create(createBeritaDto: CreateBeritaDto): Promise<Berita> {
    const existingBerita = await this.beritaRepository.findOne({
      where: { slug: createBeritaDto.slug },
    });

    if (existingBerita) {
      throw new BadRequestException('Berita slug already exists');
    }

    const berita = this.beritaRepository.create(createBeritaDto);
    return this.beritaRepository.save(berita);
  }

  async findAll(): Promise<Berita[]> {
    return this.beritaRepository.find({
      relations: ['kategori', 'author'],
    });
  }

  async findOne(id: number): Promise<Berita> {
    const berita = await this.beritaRepository.findOne({
      where: { id },
      relations: ['kategori', 'author'],
    });

    if (!berita) {
      throw new NotFoundException(`Berita with ID ${id} not found`);
    }

    // Increment views
    berita.views += 1;
    await this.beritaRepository.save(berita);

    return berita;
  }

  async findByStatus(status: string): Promise<Berita[]> {
    return this.beritaRepository.find({
      where: { status },
      relations: ['kategori', 'author'],
    });
  }

  async findByKategori(kategori_id: number): Promise<Berita[]> {
    return this.beritaRepository.find({
      where: { kategori_id },
      relations: ['kategori', 'author'],
    });
  }

  async update(id: number, updateBeritaDto: UpdateBeritaDto): Promise<Berita> {
    const berita = await this.findOne(id);
    Object.assign(berita, updateBeritaDto);
    return this.beritaRepository.save(berita);
  }

  async remove(id: number): Promise<void> {
    const berita = await this.findOne(id);
    await this.beritaRepository.remove(berita);
  }
}

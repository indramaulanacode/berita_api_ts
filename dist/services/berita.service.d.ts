import { Repository } from 'typeorm';
import { Berita } from '../entities/berita.entity';
import { CreateBeritaDto, UpdateBeritaDto } from '../dtos';
export declare class BeritaService {
    private beritaRepository;
    constructor(beritaRepository: Repository<Berita>);
    create(createBeritaDto: CreateBeritaDto): Promise<Berita>;
    findAll(): Promise<Berita[]>;
    findOne(id: number): Promise<Berita>;
    findByStatus(status: string): Promise<Berita[]>;
    findByKategori(kategori_id: number): Promise<Berita[]>;
    update(id: number, updateBeritaDto: UpdateBeritaDto): Promise<Berita>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=berita.service.d.ts.map
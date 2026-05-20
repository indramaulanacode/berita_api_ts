import { Repository } from 'typeorm';
import { Kategori } from '../entities/kategori.entity';
import { CreateKategoriDto, UpdateKategoriDto } from '../dtos';
export declare class KategoriService {
    private kategoriRepository;
    constructor(kategoriRepository: Repository<Kategori>);
    create(createKategoriDto: CreateKategoriDto): Promise<Kategori>;
    findAll(): Promise<Kategori[]>;
    findOne(id: number): Promise<Kategori>;
    update(id: number, updateKategoriDto: UpdateKategoriDto): Promise<Kategori>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=kategori.service.d.ts.map
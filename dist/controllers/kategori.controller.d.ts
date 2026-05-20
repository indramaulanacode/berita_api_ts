import { KategoriService } from '../services/kategori.service';
import { CreateKategoriDto, UpdateKategoriDto } from '../dtos';
import { Kategori } from '../entities/kategori.entity';
export declare class KategoriController {
    private readonly kategoriService;
    constructor(kategoriService: KategoriService);
    create(createKategoriDto: CreateKategoriDto): Promise<Kategori>;
    findAll(): Promise<Kategori[]>;
    findOne(id: number): Promise<Kategori>;
    update(id: number, updateKategoriDto: UpdateKategoriDto): Promise<Kategori>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=kategori.controller.d.ts.map
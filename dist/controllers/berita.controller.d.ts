import { BeritaService } from '../services/berita.service';
import { CreateBeritaDto, UpdateBeritaDto } from '../dtos';
import { Berita } from '../entities/berita.entity';
export declare class BeritaController {
    private readonly beritaService;
    constructor(beritaService: BeritaService);
    create(createBeritaDto: CreateBeritaDto): Promise<Berita>;
    findAll(status?: string, kategori_id?: string): Promise<Berita[]>;
    findOne(id: number): Promise<Berita>;
    update(id: number, updateBeritaDto: UpdateBeritaDto): Promise<Berita>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=berita.controller.d.ts.map
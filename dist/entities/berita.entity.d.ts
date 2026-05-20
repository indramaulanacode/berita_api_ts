import { User } from './user.entity';
import { Kategori } from './kategori.entity';
export declare class Berita {
    id: number;
    judul: string;
    slug: string;
    isi: string;
    gambar: string;
    kategori_id: number;
    author_id: number;
    status: string;
    views: number;
    created_at: Date;
    updated_at: Date;
    kategori: Kategori;
    author: User;
}
//# sourceMappingURL=berita.entity.d.ts.map
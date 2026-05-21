import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Kategori } from './kategori.entity';

@Entity('berita')
export class Berita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  judul: string;

  @Column({ length: 255, unique: true })
  slug: string;

  @Column({ type: 'text' })
  isi: string;

  @Column({ length: 255, nullable: true })
  gambar: string;

  @Column()
  kategori_id: number;

  @Column()
  author_id: number;

  @Column({ length: 50, default: 'draft' })
  status: string;

  @Column({ default: 0 })
  views: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Kategori)
  @JoinColumn({ name: 'kategori_id' })
  kategori: Kategori;

  @ManyToOne(() => User, (user) => user.berita)
  @JoinColumn({ name: 'author_id' })
  author: User;
}

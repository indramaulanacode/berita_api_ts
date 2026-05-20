import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';

export class CreateBeritaDto {
  @IsString()
  judul: string;

  @IsString()
  slug: string;

  @IsString()
  isi: string;

  @IsString()
  @IsOptional()
  gambar?: string;

  @IsNumber()
  kategori_id: number;

  @IsNumber()
  author_id: number;

  @IsEnum(['draft', 'publish'])
  @IsOptional()
  status?: string = 'draft';
}

export class UpdateBeritaDto {
  @IsString()
  @IsOptional()
  judul?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsString()
  @IsOptional()
  isi?: string;

  @IsString()
  @IsOptional()
  gambar?: string;

  @IsNumber()
  @IsOptional()
  kategori_id?: number;

  @IsNumber()
  @IsOptional()
  author_id?: number;

  @IsEnum(['draft', 'publish'])
  @IsOptional()
  status?: string;
}

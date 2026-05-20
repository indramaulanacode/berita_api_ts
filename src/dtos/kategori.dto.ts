import { IsString, IsOptional } from 'class-validator';

export class CreateKategoriDto {
  @IsString()
  nama: string;

  @IsString()
  slug: string;
}

export class UpdateKategoriDto {
  @IsString()
  @IsOptional()
  nama?: string;

  @IsString()
  @IsOptional()
  slug?: string;
}

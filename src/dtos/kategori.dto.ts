import { IsString, IsOptional } from 'class-validator';

export class CreateKategoriDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;
}

export class UpdateKategoriDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  slug?: string;
}

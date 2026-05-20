"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeritaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const berita_entity_1 = require("../entities/berita.entity");
let BeritaService = class BeritaService {
    constructor(beritaRepository) {
        this.beritaRepository = beritaRepository;
    }
    async create(createBeritaDto) {
        const existingBerita = await this.beritaRepository.findOne({
            where: { slug: createBeritaDto.slug },
        });
        if (existingBerita) {
            throw new common_1.BadRequestException('Berita slug already exists');
        }
        const berita = this.beritaRepository.create(createBeritaDto);
        return this.beritaRepository.save(berita);
    }
    async findAll() {
        return this.beritaRepository.find({
            relations: ['kategori', 'author'],
        });
    }
    async findOne(id) {
        const berita = await this.beritaRepository.findOne({
            where: { id },
            relations: ['kategori', 'author'],
        });
        if (!berita) {
            throw new common_1.NotFoundException(`Berita with ID ${id} not found`);
        }
        // Increment views
        berita.views += 1;
        await this.beritaRepository.save(berita);
        return berita;
    }
    async findByStatus(status) {
        return this.beritaRepository.find({
            where: { status },
            relations: ['kategori', 'author'],
        });
    }
    async findByKategori(kategori_id) {
        return this.beritaRepository.find({
            where: { kategori_id },
            relations: ['kategori', 'author'],
        });
    }
    async update(id, updateBeritaDto) {
        const berita = await this.findOne(id);
        Object.assign(berita, updateBeritaDto);
        return this.beritaRepository.save(berita);
    }
    async remove(id) {
        const berita = await this.findOne(id);
        await this.beritaRepository.remove(berita);
    }
};
exports.BeritaService = BeritaService;
exports.BeritaService = BeritaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(berita_entity_1.Berita)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BeritaService);
//# sourceMappingURL=berita.service.js.map
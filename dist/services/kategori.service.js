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
exports.KategoriService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kategori_entity_1 = require("../entities/kategori.entity");
let KategoriService = class KategoriService {
    constructor(kategoriRepository) {
        this.kategoriRepository = kategoriRepository;
    }
    async create(createKategoriDto) {
        const existingKategori = await this.kategoriRepository.findOne({
            where: { slug: createKategoriDto.slug },
        });
        if (existingKategori) {
            throw new common_1.BadRequestException('Kategori slug already exists');
        }
        const kategori = this.kategoriRepository.create(createKategoriDto);
        return this.kategoriRepository.save(kategori);
    }
    async findAll() {
        return this.kategoriRepository.find();
    }
    async findOne(id) {
        const kategori = await this.kategoriRepository.findOne({
            where: { id },
        });
        if (!kategori) {
            throw new common_1.NotFoundException(`Kategori with ID ${id} not found`);
        }
        return kategori;
    }
    async update(id, updateKategoriDto) {
        const kategori = await this.findOne(id);
        Object.assign(kategori, updateKategoriDto);
        return this.kategoriRepository.save(kategori);
    }
    async remove(id) {
        const kategori = await this.findOne(id);
        await this.kategoriRepository.remove(kategori);
    }
};
exports.KategoriService = KategoriService;
exports.KategoriService = KategoriService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kategori_entity_1.Kategori)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KategoriService);
//# sourceMappingURL=kategori.service.js.map
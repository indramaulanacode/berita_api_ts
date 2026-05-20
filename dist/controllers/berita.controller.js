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
exports.BeritaController = void 0;
const common_1 = require("@nestjs/common");
const berita_service_1 = require("../services/berita.service");
const dtos_1 = require("../dtos");
let BeritaController = class BeritaController {
    constructor(beritaService) {
        this.beritaService = beritaService;
    }
    create(createBeritaDto) {
        return this.beritaService.create(createBeritaDto);
    }
    async findAll(status, kategori_id) {
        if (status) {
            return this.beritaService.findByStatus(status);
        }
        if (kategori_id) {
            return this.beritaService.findByKategori(parseInt(kategori_id, 10));
        }
        return this.beritaService.findAll();
    }
    findOne(id) {
        return this.beritaService.findOne(id);
    }
    update(id, updateBeritaDto) {
        return this.beritaService.update(id, updateBeritaDto);
    }
    remove(id) {
        return this.beritaService.remove(id);
    }
};
exports.BeritaController = BeritaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateBeritaDto]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Query)('kategori_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.UpdateBeritaDto]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BeritaController.prototype, "remove", null);
exports.BeritaController = BeritaController = __decorate([
    (0, common_1.Controller)('berita'),
    __metadata("design:paramtypes", [berita_service_1.BeritaService])
], BeritaController);
//# sourceMappingURL=berita.controller.js.map
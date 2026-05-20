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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeritaDto = exports.CreateBeritaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBeritaDto {
    constructor() {
        this.status = 'draft';
    }
}
exports.CreateBeritaDto = CreateBeritaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBeritaDto.prototype, "judul", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBeritaDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBeritaDto.prototype, "isi", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBeritaDto.prototype, "gambar", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBeritaDto.prototype, "kategori_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBeritaDto.prototype, "author_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['draft', 'publish']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBeritaDto.prototype, "status", void 0);
class UpdateBeritaDto {
}
exports.UpdateBeritaDto = UpdateBeritaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBeritaDto.prototype, "judul", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBeritaDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBeritaDto.prototype, "isi", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBeritaDto.prototype, "gambar", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBeritaDto.prototype, "kategori_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBeritaDto.prototype, "author_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['draft', 'publish']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBeritaDto.prototype, "status", void 0);
//# sourceMappingURL=berita.dto.js.map
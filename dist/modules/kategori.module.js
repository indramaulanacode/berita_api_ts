"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KategoriModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kategori_controller_1 = require("../controllers/kategori.controller");
const kategori_service_1 = require("../services/kategori.service");
const kategori_entity_1 = require("../entities/kategori.entity");
let KategoriModule = class KategoriModule {
};
exports.KategoriModule = KategoriModule;
exports.KategoriModule = KategoriModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kategori_entity_1.Kategori])],
        controllers: [kategori_controller_1.KategoriController],
        providers: [kategori_service_1.KategoriService],
        exports: [kategori_service_1.KategoriService],
    })
], KategoriModule);
//# sourceMappingURL=kategori.module.js.map
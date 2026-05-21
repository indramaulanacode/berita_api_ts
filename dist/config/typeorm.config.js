"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const entities_1 = require("../entities");
exports.typeOrmConfig = {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'postgres',
    entities: [entities_1.User, entities_1.Kategori, entities_1.Berita],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV !== 'production',
};
//# sourceMappingURL=typeorm.config.js.map
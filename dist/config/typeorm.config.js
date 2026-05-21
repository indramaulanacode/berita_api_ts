"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const entities_1 = require("../entities");
exports.typeOrmConfig = {
    type: 'sqlite',
    database: process.env.DB_NAME || 'prokopim.db',
    entities: [entities_1.User, entities_1.Kategori, entities_1.Berita],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV !== 'production',
};
//# sourceMappingURL=typeorm.config.js.map
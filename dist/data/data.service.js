"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let RecordsService = exports.RecordsService = class RecordsService {
    constructor() {
        this.jsonServerUrl = 'http://localhost:3001';
    }
    async findAll() {
        const response = await axios_1.default.get(`${this.jsonServerUrl}/records`);
        return response.data;
    }
    async findOne(id) {
        const response = await axios_1.default.get(`${this.jsonServerUrl}/records/${id}`);
        return response.data;
    }
    async createOrUpdate(record) {
        if (record.id) {
            const response = await axios_1.default.put(`${this.jsonServerUrl}/records/${record.id}`, record);
            return response.data;
        }
        else {
            const response = await axios_1.default.post(`${this.jsonServerUrl}/records`, record);
            return response.data;
        }
    }
};
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)()
], RecordsService);
//# sourceMappingURL=data.service.js.map
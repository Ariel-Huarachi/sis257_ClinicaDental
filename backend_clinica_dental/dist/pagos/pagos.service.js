"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagosService = void 0;
const common_1 = require("@nestjs/common");
let PagosService = class PagosService {
    create(createPagoDto) {
        return 'This action adds a new pago';
    }
    findAll() {
        return `This action returns all pagos`;
    }
    findOne(id) {
        return `This action returns a #${id} pago`;
    }
    update(id, updatePagoDto) {
        return `This action updates a #${id} pago`;
    }
    remove(id) {
        return `This action removes a #${id} pago`;
    }
};
exports.PagosService = PagosService;
exports.PagosService = PagosService = __decorate([
    (0, common_1.Injectable)()
], PagosService);
//# sourceMappingURL=pagos.service.js.map
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
exports.OdontologosController = void 0;
const common_1 = require("@nestjs/common");
const odontologos_service_1 = require("./odontologos.service");
const create_odontologo_dto_1 = require("./dto/create-odontologo.dto");
const update_odontologo_dto_1 = require("./dto/update-odontologo.dto");
let OdontologosController = class OdontologosController {
    odontologosService;
    constructor(odontologosService) {
        this.odontologosService = odontologosService;
    }
    create(createOdontologoDto) {
        return this.odontologosService.create(createOdontologoDto);
    }
    findAll() {
        return this.odontologosService.findAll();
    }
    findOne(id) {
        return this.odontologosService.findOne(+id);
    }
    update(id, updateOdontologoDto) {
        return this.odontologosService.update(+id, updateOdontologoDto);
    }
    remove(id) {
        return this.odontologosService.remove(+id);
    }
};
exports.OdontologosController = OdontologosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_odontologo_dto_1.CreateOdontologoDto]),
    __metadata("design:returntype", void 0)
], OdontologosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OdontologosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OdontologosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_odontologo_dto_1.UpdateOdontologoDto]),
    __metadata("design:returntype", void 0)
], OdontologosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OdontologosController.prototype, "remove", null);
exports.OdontologosController = OdontologosController = __decorate([
    (0, common_1.Controller)('odontologos'),
    __metadata("design:paramtypes", [odontologos_service_1.OdontologosService])
], OdontologosController);
//# sourceMappingURL=odontologos.controller.js.map
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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const analytics_event_entity_1 = require("./analytics-event.entity");
const analytics_gateway_1 = require("./analytics.gateway");
let AnalyticsService = class AnalyticsService {
    analyticsRepo;
    analyticsGateway;
    constructor(analyticsRepo, analyticsGateway) {
        this.analyticsRepo = analyticsRepo;
        this.analyticsGateway = analyticsGateway;
    }
    async createEvent(userId, type, metadata) {
        const event = this.analyticsRepo.create({
            userId,
            type,
            metadata: metadata ? JSON.stringify(metadata) : null,
        });
        const savedEvent = await this.analyticsRepo.save(event);
        this.analyticsGateway.emitEvent(savedEvent);
        return savedEvent;
    }
    async getEvents() {
        return this.analyticsRepo.find({ order: { createdAt: 'DESC' } });
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analytics_event_entity_1.AnalyticsEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        analytics_gateway_1.AnalyticsGateway])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map
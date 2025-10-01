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
exports.AnalyticsEvent = exports.EventType = void 0;
const typeorm_1 = require("typeorm");
var EventType;
(function (EventType) {
    EventType["PAGE_VIEW"] = "page_view";
    EventType["CLICK"] = "click";
    EventType["LOGIN"] = "login";
    EventType["LOGOUT"] = "logout";
    EventType["OTHER"] = "other";
})(EventType || (exports.EventType = EventType = {}));
let AnalyticsEvent = class AnalyticsEvent {
    id;
    userId;
    type;
    metadata;
    createdAt;
};
exports.AnalyticsEvent = AnalyticsEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AnalyticsEvent.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: EventType,
        default: EventType.OTHER,
    }),
    __metadata("design:type", String)
], AnalyticsEvent.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Object)
], AnalyticsEvent.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AnalyticsEvent.prototype, "createdAt", void 0);
exports.AnalyticsEvent = AnalyticsEvent = __decorate([
    (0, typeorm_1.Entity)()
], AnalyticsEvent);
//# sourceMappingURL=analytics-event.entity.js.map
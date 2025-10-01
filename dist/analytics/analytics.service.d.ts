import { Repository } from 'typeorm';
import { AnalyticsEvent, EventType } from './analytics-event.entity';
import { AnalyticsGateway } from './analytics.gateway';
export declare class AnalyticsService {
    private analyticsRepo;
    private analyticsGateway;
    constructor(analyticsRepo: Repository<AnalyticsEvent>, analyticsGateway: AnalyticsGateway);
    createEvent(userId: number, type: EventType, metadata?: any): Promise<AnalyticsEvent>;
    getEvents(): Promise<AnalyticsEvent[]>;
}

import { AnalyticsService } from './analytics.service';
import { EventType } from './analytics-event.entity';
export declare class AnalyticsController {
    private analyticsService;
    constructor(analyticsService: AnalyticsService);
    createEvent(req: any, body: {
        type: EventType;
        metadata?: any;
    }): Promise<import("./analytics-event.entity").AnalyticsEvent>;
    getEvents(): Promise<import("./analytics-event.entity").AnalyticsEvent[]>;
}

import { Server } from 'socket.io';
import { AnalyticsService } from './analytics.service';
import { EventType } from './analytics-event.entity';
export declare class AnalyticsGateway {
    private analyticsService;
    server: Server;
    constructor(analyticsService: AnalyticsService);
    handleEvent(data: {
        userId: number;
        type: EventType;
        metadata?: any;
    }): Promise<import("./analytics-event.entity").AnalyticsEvent>;
    emitEvent(event: any): Promise<void>;
}

import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AnalyticsService } from './analytics.service';
import { EventType } from './analytics-event.entity';

@WebSocketGateway({ cors: true })
export class AnalyticsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private analyticsService: AnalyticsService) {}

  
  @SubscribeMessage('newEvent')
  async handleEvent(@MessageBody() data: { userId: number; type: EventType; metadata?: any }) {
    const event = await this.analyticsService.createEvent(data.userId, data.type, data.metadata);
    this.server.emit('event', event); 
    return event;
  }

  async emitEvent(event: any) {
    this.server.emit('event', event);
  }
}

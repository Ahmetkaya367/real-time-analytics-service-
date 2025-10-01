import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnalyticsEvent, EventType } from './analytics-event.entity';
import { AnalyticsGateway } from './analytics.gateway';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(AnalyticsEvent)
    private analyticsRepo: Repository<AnalyticsEvent>,
    private analyticsGateway: AnalyticsGateway, 
  ) {}

  async createEvent(userId: number, type: EventType, metadata?: any) {
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
}

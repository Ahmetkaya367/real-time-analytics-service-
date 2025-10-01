import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { Request } from 'express';
import { EventType } from './analytics-event.entity';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('event')
  async createEvent(@Req() req: any, @Body() body: { type: EventType; metadata?: any }) {
    const userId = req['user'].sub;
    return this.analyticsService.createEvent(userId, body.type, body.metadata);
  }

  @UseGuards(JwtAuthGuard)
  @Get('events')
  async getEvents() {
    return this.analyticsService.getEvents();
  }
}

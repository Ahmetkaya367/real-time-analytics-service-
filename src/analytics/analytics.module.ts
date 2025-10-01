import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsEvent } from './analytics-event.entity';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsGateway} from './analytics.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([AnalyticsEvent])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService,AnalyticsGateway],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}

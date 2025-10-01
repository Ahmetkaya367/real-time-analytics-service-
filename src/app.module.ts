import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AnalyticsModule } from './analytics/analytics.module'; 
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_user',
      password: 'password123',
      database: 'analytics_db',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule, 
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}

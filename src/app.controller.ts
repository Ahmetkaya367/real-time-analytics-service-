import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtAuthGuard: JwtAuthGuard 
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/profile')
  getProfile(@Request() req): any {
   
    if (!this.jwtAuthGuard.canActivate({ switchToHttp: () => ({ getRequest: () => req }) } as any)) {
      return { message: 'Unauthorized' };
    }
    return { message: 'Protected route', user: req['user'] };
  }
}

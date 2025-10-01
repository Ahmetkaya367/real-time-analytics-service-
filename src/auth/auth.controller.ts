import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const user = await this.usersService.create(body.email, body.password);
    return { id: user.id, email: user.email };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    console.log('login endpoint çağrıldı:', body);
    try {
      const user = await this.authService.validateUser(body.email, body.password);
      console.log('validateUser sonucu:', user);
      if (!user) return { error: 'Invalid credentials' };
      const token = await this.authService.login(user);
      console.log('login token:', token);
      return token;
    } catch (err) {
      console.error('Login error:', err);
      return { error: 'Internal server error', details: err.message };
    }
  }

@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Req() req: any) {  
  return { user: req.user };
}

}

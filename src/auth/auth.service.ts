// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'; 

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

 async validateUser(email: string, pass: string) {
  console.log('validateUser çağrıldı:', email);
  const user = await this.usersService.findByEmail(email);
  console.log('Bulunan user:', user);
  if (!user) {
    console.log('User bulunamadı');
    return null;
  }

  const match = await bcrypt.compare(pass, user.password);
  console.log('Password eşleşmesi:', match);

  if (match) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}


  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role || 'user' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

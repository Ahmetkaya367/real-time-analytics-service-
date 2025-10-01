import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
export declare class AppController {
    private readonly appService;
    private readonly jwtAuthGuard;
    constructor(appService: AppService, jwtAuthGuard: JwtAuthGuard);
    getHello(): string;
    getProfile(req: any): any;
}

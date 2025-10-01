import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    } | {
        error: string;
        details?: undefined;
    } | {
        error: string;
        details: any;
    }>;
    getProfile(req: any): {
        user: any;
    };
}

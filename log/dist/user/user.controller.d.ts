import { UserService } from './user.service';
import { SignupDto, LoginDto } from './user.dto';
import { user, userDocument } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<user[]>;
    signup(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, userDocument> & user & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    }>;
    getUserByName(name: string): Promise<(import("mongoose").Document<unknown, {}, userDocument> & user & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | {
        message: string;
    }>;
    deleteUser(name: string): Promise<{
        message: string;
    }>;
}

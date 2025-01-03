import { Model } from 'mongoose';
import { user, userDocument } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<userDocument>);
    findAll(): Promise<user[]>;
    signup(name: string, email: string, password: string, age: number): Promise<import("mongoose").Document<unknown, {}, userDocument> & user & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(email: string, password: string): Promise<{
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
    deleteUserByName(name: string): Promise<{
        message: string;
    }>;
}

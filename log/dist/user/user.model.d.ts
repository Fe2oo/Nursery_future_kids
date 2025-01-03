import { Document } from 'mongoose';
export declare class user {
    name: string;
    email: string;
    password: string;
    age: number;
}
export type userDocument = user & Document;
export declare const userSchema: import("mongoose").Schema<user, import("mongoose").Model<user, any, any, any, Document<unknown, any, user> & user & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, user, Document<unknown, {}, import("mongoose").FlatRecord<user>> & import("mongoose").FlatRecord<user> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

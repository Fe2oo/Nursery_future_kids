import { Document } from "mongoose";
export type subjectDocument = subject & Document;
export declare class subject {
    id: number;
    title: string;
    image: string;
}
export declare const subjectSchema: import("mongoose").Schema<subject, import("mongoose").Model<subject, any, any, any, Document<unknown, any, subject> & subject & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, subject, Document<unknown, {}, import("mongoose").FlatRecord<subject>> & import("mongoose").FlatRecord<subject> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

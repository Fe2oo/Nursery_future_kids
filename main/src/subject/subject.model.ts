import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type subjectDocument = subject & Document;

@Schema()
export class subject {
  @Prop({ type: Number, unique: true })  // Ensure id is unique and numeric
  id: number;

  @Prop()
  title: string;

  @Prop()
  image: string;
}

export const subjectSchema = SchemaFactory.createForClass(subject);

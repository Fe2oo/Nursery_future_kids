import { Schema, Document } from 'mongoose';
export interface Assignment extends Document {
  title: string;
  description: string;
  image: string;
}

export const AssignmentSchema = new Schema<Assignment>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

import { Document, Schema } from "mongoose";

export interface IQuizModel extends Document {
  mobileUserId: Schema.Types.ObjectId,
  questionNumber: number;
  answer: string;
  sendedAt: Date;
}

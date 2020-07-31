import * as connection from 'src/core/config/database/MongoConnection';
import { Schema } from "mongoose";
import { IQuizModel } from './IQuizModel';

const QuizSchema: Schema = new Schema(
  {
    mobileUserId: {
      type: Schema.Types.ObjectId,
      ref: 'MobileUser',
      required: true,
    },
    questionNumber: {
      type: Number,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    sendedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'Quiz',
    versionKey: false,
  }
)

export default connection.db.model<IQuizModel>('Quiz', QuizSchema);

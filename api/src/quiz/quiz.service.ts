import { Injectable } from '@nestjs/common';
import { QuizValidator } from './quiz.validator';
import { IQuizModel } from './model/IQuizModel';
import QuizModel from './model/QuizModel';
import { DatabaseErrorTransformer } from 'src/core/transformer/exception/DatabaseErrorTransformer';
import { UntypedObject } from 'src/core/types/UntypedObject';

@Injectable()
export class QuizService {
  constructor(private readonly validator: QuizValidator) {}

  public async create(quiz: IQuizModel): Promise<IQuizModel> {
    let quizCreated: IQuizModel;
    const quizValidated: IQuizModel = this.validator.create(quiz);
    const quizToCreate: IQuizModel = new QuizModel(quizValidated);

    try {
      quizCreated = await quizToCreate.save();
    } catch (error) {
      throw DatabaseErrorTransformer.fromError(error);
    }

    return quizCreated;
  }

  public async all(): Promise<UntypedObject> {
    return {
      quizzes: await QuizModel.find(),
    };
  }
}

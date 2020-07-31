import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizValidator } from './quiz.validator';

@Module({
  controllers: [QuizController],
  providers: [QuizValidator, QuizService],
})
export class QuizModule {}

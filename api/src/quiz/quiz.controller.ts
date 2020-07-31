import { Controller, Body, Post, HttpCode, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { IQuizModel } from './model/IQuizModel';

@Controller('quiz')
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Post()
  @HttpCode(201)
  public async create(@Body() quiz: IQuizModel) {
    return await this.service.create(quiz);
  }

  @Get()
  @HttpCode(200)
  public async all() {
    return await this.service.all();
  }
}

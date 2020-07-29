import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(8081);

  console.log('[+] Running API in port 8081');
}

bootstrap();

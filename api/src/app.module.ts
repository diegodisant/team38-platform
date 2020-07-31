import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HealthCheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    AuthModule,
    HealthCheckModule,
  ],
})
export class AppModule {}

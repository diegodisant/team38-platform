import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HealthCheckModule } from './healthcheck/healthcheck.module';
import { RegisterModule } from './register/register.module';
import { QuarantinedModule } from './quarantined/quarantined.module';
import { LabAnalysisModule } from './lab-analysis/lab-analysis.module';
import { StoreModule } from './store/store.module';
import { StoreAccessModule } from './store-access/store-access.module';

@Module({
  imports: [
    AuthModule,
    HealthCheckModule,
    RegisterModule,
    QuarantinedModule,
    LabAnalysisModule,
    StoreModule,
    StoreAccessModule,
  ],
})
export class AppModule {}

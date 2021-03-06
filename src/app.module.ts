import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

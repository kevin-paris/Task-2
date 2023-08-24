import { Module } from '@nestjs/common';
import { RecordsController } from './data.controller';
import { RecordsService } from './data.service';

@Module({
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class DataModule {}

import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { RecordsService } from './data.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recordsService.findOne(id);
  }

  @Post()
  createOrUpdate(@Body() record: { id: number; name: string }) {
    return this.recordsService.createOrUpdate(record);
  }
}

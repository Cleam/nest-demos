import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnModuleDestroy,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';

@Controller('bbb')
export class BbbController
  implements
    OnModuleInit,
    OnModuleDestroy,
    OnApplicationBootstrap,
    OnApplicationShutdown,
    BeforeApplicationShutdown
{
  constructor(
    private readonly aaaService: AaaService,
    private readonly bbbService: BbbService,
  ) {}

  onModuleInit() {
    console.log(`AaaController: onModuleInit`);
  }
  onApplicationBootstrap() {
    console.log(`AaaController: onApplicationBootstrap`);
  }
  onModuleDestroy() {
    console.log('AaaController: onModuleDestroy.');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('AaaController: beforeApplicationShutdown.', signal);
  }
  onApplicationShutdown(signal?: string) {
    console.log('AaaController: onApplicationShutdown.', signal);
  }

  @Post()
  create(@Body() createBbbDto: CreateBbbDto) {
    return this.bbbService.create(createBbbDto);
  }

  @Get()
  findAll() {
    // return this.bbbService.findAll();
    return 'bbbController: ' + this.aaaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}

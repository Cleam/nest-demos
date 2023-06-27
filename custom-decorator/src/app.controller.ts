import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Aaa } from './aaa.decorator';
import { AaaGuard } from './aaa.guard';
import { Bbb } from './bbb.decorator';
import { MyHeaders } from './my-headers.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', ['admin', 'admin2'])
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('h2')
  @Aaa('admin', 'admin2')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('h3', 'admin', 'admin2')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('h4')
  getHello4(@MyHeaders() c): string {
    return c;
  }
}

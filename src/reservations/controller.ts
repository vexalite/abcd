import { Controller, Get, Post, Body, Patch, Param, Logger } from '@nestjs/common';
import { ReservationsService } from './service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FreezePipe } from 'src/pipes/freezePipe';
import { RequestService } from 'src/request.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}
  @Post()
  issueBook(@Body() body: CreateReservationDto) {
        return this.reservationsService.issue(body);
  }

  @Patch('reissue:id')
  reIssueBook(@Param('id') id: string) {
    return this.reservationsService.reIssueBook(id);
  }

  @Patch('return/:id')
  returnBook(@Body() body: CreateReservationDto, @Param('id') id: string) {
    return this.reservationsService.returnBook(body, id);
  }
  @Get('overdue/:id')
  overdue(@Param('id') id: string) {
    return this.reservationsService.overdue(id);
  }

  @Get('all')
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(id);
  }
}

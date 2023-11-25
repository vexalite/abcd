import { Model } from 'mongoose';
import { Reservation } from './schema';
import { BaseRepository } from 'src/baseRepository';
export declare class ReservationRepository extends BaseRepository<Reservation> {
    private readonly reservationModel;
    constructor(reservationModel: Model<Reservation>);
}

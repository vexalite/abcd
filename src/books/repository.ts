import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Book } from './schema';
import { BaseRepository } from 'src/baseRepository';
import { BookInstitute } from 'src/book-institute-relation/schema';

@Injectable()
export class BooksRepository extends BaseRepository<Book> {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
    @InjectModel('BookInstitute')
    private readonly bookInstituteModel: Model<BookInstitute>,
  ) {
    super(bookModel);
  }

  async findAllB(instituteId): Promise<number> {
    const aggregationResult = await this.bookInstituteModel.aggregate([
      {
        $match: {
          instituteId: instituteId,
        },
      },
      {
        $group: {
          _id:null,
          totalQuantity: { $sum: '$quantity' },
        },
      },
    ]);

    if (aggregationResult.length > 0) {
      return aggregationResult[0].totalQuantity;
    }

    return 0; // Return 0 if no records found
  }
}

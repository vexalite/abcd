import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/baseRepository';
import { BookInstitute } from 'src/book-institute-relation/schema';
import { Book } from 'src/books/schema';
@Injectable()
export class SearchRepository extends BaseRepository<BookInstitute> {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
    @InjectModel('BookInstitute')
    private readonly bookInstituteModel: Model<BookInstitute>,
  ) {
    super(bookInstituteModel);
  }

  async universalSearch(id: string, searchQuery: string) {
    const book = await this.bookModel
      .find({
        $or: [
          { title: { $regex: new RegExp(searchQuery, 'i') } },
          { author: { $regex: new RegExp(searchQuery, 'i') } },
        ],
      })
      // .find({
      //   $text: { $search: searchQuery },
      // })
      .exec();
    const booksToCheck = book.map((book) => book.id);
    const foundBooksInstitutes = await this.bookInstituteModel
      .find({
        instituteId: id,
        bookId: { $in: booksToCheck },
      })
      .populate('bookId')
      .exec();
    return foundBooksInstitutes;
  }

  // async universalSearch(id: string, searchQuery: string) {
  //   const book = await this.bookInstituteModel
  //     .find({
  //       title: { $regex: new RegExp(searchQuery, 'i') },
  //     })
  //     .exec();
  //   return book;
  // }
}

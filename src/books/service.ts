import { Injectable } from '@nestjs/common';
import { Book } from './schema';
import { BookDto } from './dto/create-book.dto';
import { UpdateCatalogDto } from './dto/update-book.dto';
import { BooksRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { CreateBookInstituteRelationDto } from 'src/book-institute-relation/dto/create-book-institute-relation.dto';
import { RequestService } from 'src/request.service';
import { BookInstitute } from 'src/book-institute-relation/schema';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';

@Injectable()
export class BooksService {
  private instituteId: string;
  constructor(
    private readonly requestService: RequestService,
    private readonly booksRepository: BooksRepository,
    private readonly instituteSettingRepository: InstituteSettingRepository,
    private readonly bookInstitutesRepository: BookInstitutesRepository,
  ) {this.instituteId = this.requestService.getInstituteID()}

  async create(
    isbn: string,
    body: BookDto,
  ): Promise<Book> {
    try {
      const existingSetting = await this.instituteSettingRepository.findAllByInstitute(this.instituteId)
      if(!existingSetting){
        const createdInstitute =
      await this.instituteSettingRepository.create({instituteId: this.instituteId})
      }else{
        console.log(`setting exists`)
      }
      const existingBook = await this.booksRepository.findBookByISBN(isbn);
      if (existingBook) {
        console.log(existingBook.id);
        const relation: CreateBookInstituteRelationDto = {
          instituteId: this.instituteId,
          bookId: existingBook.id,
          quantity: body.quantity,
        };

        await this.bookInstitutesRepository.create(relation);
        return existingBook;
      } else {
        const createBook = await this.booksRepository.create(body);
        const relation: CreateBookInstituteRelationDto = {
          instituteId: this.instituteId,
          bookId: createBook.id,
          quantity: body.quantity,
        };
        await this.bookInstitutesRepository.create(relation);
        return createBook;
      }
    } catch (error) {
      console.error(`Error in create:`, (error as Error).message);
      throw error;
    }
  }

  async findInstituteBooks(): Promise<BookInstitute[]> {
    try {
      const books = await this.bookInstitutesRepository.findAllBooks(this.instituteId);
      return books;
    } catch (error) {
      console.error(`Error in findAll:`, (error as Error).message);
      throw error;
    }
  }

  async findAllBooks(): Promise<Book[]> {
    try {
      const books = await this.booksRepository.findAll();
      return books;
    } catch (error) {
      console.error(`Error in findAll:`, (error as Error).message);
      throw error;
    }
  }

  async findOne(id: string): Promise<Book | null> {
    try {
      const book = await this.booksRepository.findById(id);
      return book;
    } catch (error) {
      console.error(`Error in findOne:`, (error as Error).message);
      throw error;
    }
  }

  async update(
    id: string,
    updateCatalogDto: UpdateCatalogDto,
  ): Promise<Book | null> {
    try {
      const updatedBook = await this.booksRepository.update(
        id,
        updateCatalogDto,
      );
      return updatedBook;
    } catch (error) {
      console.error(`Error in update:`, (error as Error).message);
      throw error;
    }
  }

  // async remove(id: string): Promise<void> {
  //   try {
  //     await this.booksRepository.removeBook(id);
  //   } catch (error) {
  //     console.error(`Error in remove:`, (error as Error).message);
  //     throw error;
  //   }
  // }
}

import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './service';
import { BookDto } from './dto/create-book.dto';
import { Book } from './schema';
import { UpdateCatalogDto } from './dto/update-book.dto';
import { BookInstitute } from 'src/book-institute-relation/schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post(':isbn')
  async createBook(
    @Param('isbn') isbn: string,
    @Body() body: BookDto,
  ): Promise<Book> {
    return this.booksService.create(isbn, body);
  }

  @Get()
  async getInstituteBooks(): Promise<BookInstitute[]> {
    return this.booksService.findInstituteBooks();
  }

  @Get('all')
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.findAllBooks();
  }

  @Get('totalbooks')
  async getTotalBookQuantity() {
    const totalQuantity = await this.booksService.calculateTotalQuantity();
    return totalQuantity ;
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findOne(id);
  }
 
  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateCatalogDto: UpdateCatalogDto,
  ): Promise<Book | null> {
    return this.booksService.update(id, updateCatalogDto);
  }

  


  // @Delete(':id')
  // async removeBook(@Param('id') id: string): Promise<void> {
  //   return this.booksService.remove(id);
  // }
}

export declare class CreateCatalogDto {
    height?: number;
    width?: number;
    thickness?: number;
}
declare class IsbnDto {
    ISBN10?: string;
    ISBN13?: string;
}
export declare class BookDto {
    title: string;
    author: string[];
    publisher: string[];
    publishedDate: Date;
    description: string;
    ISBN: IsbnDto;
    pageCount: number;
    dimensions: CreateCatalogDto;
    mainCategory: string;
    categories?: string[];
    edition?: string;
    volume?: string;
    coverImageUrl?: string;
    language: string;
    isAvailableForIssue: boolean;
    shelfLocation?: string;
    holdLimit?: number;
    tags?: string[];
    averageRating?: number;
    createdAt: Date;
    updatedAt?: Date;
    quantity: number;
}
export {};

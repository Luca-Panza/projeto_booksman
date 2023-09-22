import prisma from "../database/index";

import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

export async function getBooks() {
  const result = await prisma.book.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.book.findUnique({ where: { id } });
  return result;
}

export async function createBook(book: CreateBook) {
  const body: CreateBook = { ...book, purchaseDate: new Date(book.purchaseDate) };
  const result = await prisma.book.create({
    data: {
      title: body.title,
      author: body.author,
      publisher: body.publisher,
      purchaseDate: new Date(body.purchaseDate),
    },
  });
  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  const result = await prisma.book.update({
    data: {
      grade: grade,
      review: review,
    },
    where: { id: bookId },
  });
  return result;
}

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
  const result = await prisma.book.create({ data: { ...book, purchaseDate: new Date(book.purchaseDate) } });
  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  const result = await prisma.book.update({ data: { grade, review }, where: { id: bookId } });
  return result;
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addBook = async (req, res) => {
  const { title, author, price } = req.body;
  const book = await prisma.book.create({ data: { title, author, price } });
  res.status(201).json(book);
};

export const getAllBooks = async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
};

export const getBookById = async (req, res) => {
  const book = await prisma.book.findUnique({ where: { id: Number(req.params.id) } });
  res.json(book);
};

export const updateBook = async (req, res) => {
  const { title, author, price } = req.body;
  const book = await prisma.book.update({
    where: { id: Number(req.params.id) },
    data: { title, author, price }
  });
  res.json(book);
};

export const deleteBook = async (req, res) => {
  await prisma.book.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Book deleted successfully" });
};
 // bookscontrollers.js
export const getBooks = (req, res) => {
  // your logic to fetch books
  res.send("All books");
};

export const createBook = (req, res) => {
  // logic to create a book
  res.send("Book created");
};

// export other functions similarly

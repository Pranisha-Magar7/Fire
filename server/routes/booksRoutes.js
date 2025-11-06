import express from "express";
import {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from "../Controller/bookscontrollers.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;

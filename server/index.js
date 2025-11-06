import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoutes.js";
import booksRoutes from "./routes/booksRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/books", booksRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

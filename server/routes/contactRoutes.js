import express from "express";
import {
  addContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from "../Controller/contactcontrollers.js";

const router = express.Router();

router.post("/", addContact);
router.get("/", getContacts);
router.get("/:id", getContactById);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addContact = async (req, res) => {
  const { name, email, message } = req.body;
  const contact = await prisma.contact.create({ data: { name, email, message } });
  res.status(201).json(contact);
};

export const getAllContacts = async (req, res) => {
  const contacts = await prisma.contact.findMany();
  res.json(contacts);
};

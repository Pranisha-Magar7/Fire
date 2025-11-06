import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addMembership = async (req, res) => {
  const { name, price, duration } = req.body;
  const membership = await prisma.membership.create({ data: { name, price, duration } });
  res.status(201).json(membership);
};

export const getAllMemberships = async (req, res) => {
  const memberships = await prisma.membership.findMany();
  res.json(memberships);
};

export const getMembershipById = async (req, res) => {
  const membership = await prisma.membership.findUnique({ where: { id: Number(req.params.id) } });
  res.json(membership);
};

export const updateMembership = async (req, res) => {
  const { name, price, duration } = req.body;
  const membership = await prisma.membership.update({
    where: { id: Number(req.params.id) },
    data: { name, price, duration }
  });
  res.json(membership);
};

export const deleteMembership = async (req, res) => {
  await prisma.membership.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Membership deleted successfully" });
};

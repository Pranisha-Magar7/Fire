// userController.js
import { v4 as uuidv4 } from "uuid";

// Mock DB example
let users = [];

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { id: uuidv4(), name, email, password };
  users.push(newUser);
  res.status(201).json({ message: "User registered", user: newUser });
};

export const getUsers = (req, res) => {
  res.json(users);
};

export const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { ...users[index], ...req.body };
  res.json({ message: "User updated", user: users[index] });
};

export const deleteUser = (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.json({ message: "User deleted" });
};

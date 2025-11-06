import express from "express";
import {
  addMembership,
  getMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership
} from "../controller/membershipcontrollers.js";

const router = express.Router();

router.post("/", addMembership);
router.get("/", getMemberships);
router.get("/:id", getMembershipById);
router.put("/:id", updateMembership);
router.delete("/:id", deleteMembership);

export default router;

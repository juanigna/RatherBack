import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/students.controller.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

export default router;

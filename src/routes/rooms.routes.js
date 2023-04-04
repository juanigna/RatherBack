import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  getStudentsByRoom,
  updateRoom,
} from "../controllers/rooms.controller.js";

const router = express.Router();

router.post("/", createRoom);
router.put("/:roomId", updateRoom);
router.get("/", getAllRooms);
router.delete("/:roomId", deleteRoom);
router.get("/:roomId", getRoom);
router.get("/:roomId/students", getStudentsByRoom);

export default router;

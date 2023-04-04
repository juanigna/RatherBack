import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import roomRoutes from "./routes/rooms.routes.js";
import studentRoutes from "./routes/students.routes.js";

const app = express();
export const prisma = new PrismaClient();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use("/api/room", roomRoutes);
app.use("/api/student", studentRoutes);

app.listen(5000, () => {
  console.log(` Ready on http://localhost:5000`);
});

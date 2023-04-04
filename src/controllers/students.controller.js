import { prisma } from "../app.js";

export const createStudent = async (req, res) => {
  try {
    const { name, lastName, age, roomId, gender } = req.body;

    if (!name || !lastName || !age || !roomId || !gender) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const room = prisma.room.findMany({
      where: {
        roomId: roomId,
      },
    });

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    const result = await prisma.student.create({
      data: {
        name,
        lastName,
        age,
        roomId,
        gender,
      },
    });

    return res.status(200).json(result);
  } catch (e) {
    return res.status(404).json({ error: e.messages });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json({ data: students });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Deleted successfully!" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  try {
    const update = await prisma.student.updateMany({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        lastName: lastName,
      },
    });

    res.status(200).json({ message: "Updated student!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

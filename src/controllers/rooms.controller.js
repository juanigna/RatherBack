import { prisma } from "../index.js";

export const createRoom = async (req, res) => {
  const { roomName } = req.body;
  const result = await prisma.room.create({
    data: {
      RoomName: roomName,
    },
  });

  res.status(200).json({ message: result });
};

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    res.status(200).json({ data: rooms });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getRoom = async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await prisma.room.findMany({
      where: {
        id: Number(roomId),
      },
    });

    const students = await prisma.student.findMany({
      where: {
        roomId: Number(roomId),
      },
    });

    res.status(200).json({ data: room });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteRoom = async (req, res) => {
  const { roomId } = req.params;
  try {
    const result = await prisma.room.delete({
      where: {
        id: Number(roomId),
      },
    });
    res.status(200).json({ message: "Deleted successfully!" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getStudentsByRoom = async (req, res) => {
  const { roomId } = req.params;
  const students = await prisma.student.findMany({
    where: {
      roomId: Number(roomId),
    },
  });

  res.status(200).json({ data: students });
  try {
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateRoom = async (req, res) => {
  const { roomId } = req.params;
  const { name } = req.body;
  try {
    const update = await prisma.room.updateMany({
      where: {
        id: Number(roomId),
      },
      data: {
        RoomName: name,
      },
    });

    res.json(update);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

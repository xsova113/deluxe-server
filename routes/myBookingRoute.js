import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/myBookings", async (req, res) => {
  try {
    const { roomId, email, lastName } = await req.body;
    if (!roomId) {
      return res.json({ message: "No roomId found" });
    }
    if (!email) {
      return res.json({ message: "No roomId found" });
    }
    if (!lastName) {
      return res.json({ message: "No roomId found" });
    }
    const response = await prisma.reservation.findMany({
      where: { roomId },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;

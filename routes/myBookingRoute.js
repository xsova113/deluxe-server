import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.get("/myBookings/:roomId", async (req, res) => {
  try {
    const roomId = req.params.roomId;

    if (!roomId) {
      return res.json({ message: "No room Id found" });
    }

    const reservations = await prisma.reservation.findMany({
      where: { roomId },
    });

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
  }
});

export default router;

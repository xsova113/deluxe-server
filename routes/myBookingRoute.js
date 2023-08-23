import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/myBookings", async (req, res) => {
  try {
    const { roomId } = await req.body;
    const response = await prisma.reservation.findMany({
      where: { roomId },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error });
  }
});

export default router;

import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/myBookings", async (req, res) => {
  try {
    const { id, lastName, email } = await req.body;
    const response = await prisma.reservation.findUnique({
      where: { id: id, lastName: lastName, email: email },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

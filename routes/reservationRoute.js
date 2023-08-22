import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/reservations", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      city,
      province,
      checkInDate,
      checkOutDate,
      roomId,
      creditCardNumber,
      creditCardType,
    } = await req.body;
    await prisma.reservation.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        city,
        province,
        checkInDate,
        checkOutDate,
        roomId,
        creditCardNumber,
        creditCardType,
      },
    });

    res.status(200).json({ message: "Reservation successul" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

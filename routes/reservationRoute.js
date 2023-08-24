import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/reservations", async (req, res) => {
  try {
    const {
      roomId,
      checkInDate,
      checkOutDate,
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      city,
      province,
      creditCardNumber,
      creditCardType,
      postalCode,
    } = req.body;

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
        postalCode,
        roomId,
        creditCardNumber,
        creditCardType,
      },
    });

    res.status(200).json({ message: "Reservation successfully created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

router.post("/newsletters", async (req, res) => {
  try {
    const { email } = req.body;
    await prisma.newsletter.create({ data: { email } });

    res.status(200).json({ message: "Signed up successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

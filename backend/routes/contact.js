import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,  
      replyTo: email,              
      subject: `Portfolio Contact from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`
    });

    res.status(200).json({ success: true, msg: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Failed to send message" });
  }
});

export default router;
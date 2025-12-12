import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Allow cross-origin requests (if needed)
app.use(cors());
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

// Contact form API
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, companySize } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ZOHO_USER,
      subject: "New Website Contact Form Submission",
      text: `${firstName} ${lastName} - ${email} - ${companySize}`
    });
    res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Serve React build
app.use(express.static(path.join(process.cwd(), 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

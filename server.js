// import express from 'express';
// import path from 'path';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Allow cross-origin requests (if needed)
// app.use(cors());
// app.use(express.json());

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.ZOHO_USER,
//     pass: process.env.ZOHO_PASS
//   }
// });

// // Contact form API
// app.post("/api/contact", async (req, res) => {
//   const { firstName, lastName, email, companySize } = req.body;
//   try {
//     await transporter.sendMail({
//       from: process.env.ZOHO_USER,
//       to: process.env.ZOHO_USER,
//       subject: "New Website Contact Form Submission",
//       text: `${firstName} ${lastName} - ${email} - ${companySize}`
//     });
//     res.status(200).json({ message: "Email sent!" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to send email." });
//   }
// });

// // Serve React build
// app.use(express.static(path.join(process.cwd(), 'dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
app.use(
  cors({
    origin: corsOrigin.split(","),
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// SENDGRID TRANSPORT
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});

// VERIFY SMTP ON STARTUP
transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP is ready to send messages");
  }
});

// CONTACT FORM ENDPOINT
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, companySize } = req.body;

  if (!firstName || !lastName || !email || !companySize) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const mailOptions = {
    from: `"Corviun Website" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    replyTo: email,
    subject: "New Website Contact Form Submission",
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company Size: ${companySize}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// TEST EMAIL ENDPOINT
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Corviun Test" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: "SendGrid Test Email",
      text: "This is a test email from SendGrid via Nodemailer.",
    });
    res.send("Test email sent successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Test email failed.");
  }
});

// SERVE FRONTEND BUILD
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

// REACT ROUTER FALLBACK
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

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

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ZOHO SMTP CONFIG
// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 587,
//   secure: true,
//   auth: {
//     user: process.env.ZOHO_USER,
//     pass: process.env.ZOHO_PASS,
//   },
// });
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
  tls: {
    rejectUnauthorized: false, // allows self-signed certs
  },
});

// CONTACT FORM ENDPOINT
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, companySize } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: process.env.ZOHO_USER,
    subject: "New Website Contact Form Submission",
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company Size: ${companySize}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email info:", info);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// TEST EMAIL ENDPOINT
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ZOHO_USER,
      subject: "Test Email",
      text: "This is a test email from Nodemailer!",
    });
    res.send("Test email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Test email failed");
  }
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP is ready to send messages");
  }
});

// Serve frontend build
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

// Catch-all for React routing
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import sgMail from "@sendgrid/mail";

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

// SENDGRID API SETUP
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CONTACT FORM ENDPOINT
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, companySize } = req.body;

  if (!firstName || !lastName || !email || !companySize) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const msg = {
    to: process.env.TO_EMAIL,
    from: {
      email: process.env.FROM_EMAIL,
      name: "Corviun Website",
    },
    replyTo: email,
    subject: "New Website Contact Form Submission",
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Company Size: ${companySize}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("SendGrid API error:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// TEST EMAIL ENDPOINT
app.get("/test-email", async (req, res) => {
  try {
    await sgMail.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: "SendGrid API Test Email",
      text: "This is a test email sent via SendGrid Web API.",
    });
    res.send("Test email sent successfully.");
  } catch (error) {
    console.error(error.response?.body || error);
    res.status(500).send("Test email failed.");
  }
});

// SERVE FRONTEND BUILD
const frontendPath = path.join(__dirname, "dist");
app.use(express.static(frontendPath));

// REACT ROUTER FALLBACK
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

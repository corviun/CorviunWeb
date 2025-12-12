// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ZOHO SMTP CONFIG
// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.ZOHO_USER,
//     pass: process.env.ZOHO_PASS
//   }
// });

// // CONTACT FORM ENDPOINT
// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     await transporter.sendMail({
//       from: "YOUR_EMAIL@yourdomain.com",
//       to: "YOUR_EMAIL@yourdomain.com",
//       subject: "New Form Submission",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     });

//     res.status(200).json({ success: true });
//   } catch (err) {
//     console.error("Email Failed:", err);
//     res.status(500).json({ success: false });
//   }
// });


// app.post('/api/contact', async (req, res) => {
//   const { firstName, lastName, email, companySize } = req.body;

//   const mailOptions = {
//     from: process.env.ZOHO_USER,
//     to: process.env.ZOHO_USER, // YOU receive the message
//     subject: 'New Website Contact Form Submission',
//     text: `
// New contact form submission:

// Name: ${firstName} ${lastName}
// Email: ${email}
// Company Size: ${companySize}
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent!' });
//   } catch (error) {
//     console.error('Email error:', error);
//     res.status(500).json({ error: 'Failed to send email.' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend running on port ${PORT}`);
// });








import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST"]
  })
);

// app.use(
//   cors({
//     origin: "https://www.corviun.com", 
//     methods: ["GET", "POST"],
//   })
// );

app.use(express.json());

// ZOHO SMTP CONFIG
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,       // Zoho SSL port
  secure: true,    // use SSL
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

// CONTACT FORM ENDPOINT
app.post("/api/contact", async (req, res) => {
  console.log("Received POST /api/contact:", req.body);

  const { firstName, lastName, email, companySize } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: process.env.ZOHO_USER,
    subject: "New Website Contact Form Submission",
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company Size: ${companySize}
    `
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


app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ZOHO_USER,
      subject: "Test Email",
      text: "This is a test email from Nodemailer!"
    });
    res.send("Test email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Test email failed");
  }
});


transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP is ready to send messages");
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

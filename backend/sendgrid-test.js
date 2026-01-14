import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

(async () => {
  try {
    await sgMail.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: "SendGrid Test Email",
      text: "This is a test email sent from SendGrid via Node.",
    });
    console.log("Test email sent successfully!");
  } catch (error) {
    console.error("SendGrid test error:", error.response?.body || error);
  }
})();

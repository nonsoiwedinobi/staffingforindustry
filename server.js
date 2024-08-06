import express from "express";
import multer from "multer";
import { readFileSync, unlinkSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer({ dest: "uploads/" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Use SendGrid API key from .env

// Set Content Security Policy headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self'; script-src 'self'"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-email", upload.single("resume"), (req, res) => {
  const { fullName, email, subject } = req.body;
  const filePath = req.file.path;
  const fileName = req.file.originalname;

  const msg = {
    to: "nonsoiwedinobi@yahoo.com", // Change to your recipient
    from: "info@staffing4industry.com", // Change to your verified sender
    subject: subject,
    text: `Applicant Name: ${fullName}\nEmail: ${email}\n\nAttached is the resume.`,
    attachments: [
      {
        content: readFileSync(filePath).toString("base64"),
        filename: fileName,
        type: req.file.mimetype,
        disposition: "attachment",
      },
    ],
  };

  sgMail
    .send(msg)
    .then(() => {
      unlinkSync(filePath); // Remove the file after sending the email
      res.status(200).send("Email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

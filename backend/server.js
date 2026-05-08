require("dotenv").config();

const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected "))
  .catch((err) => console.log("DB Error:", err));


// NODEMAILER TRANSPORTER
const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {

    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASS

  }

});


// SMTP VERIFY
transporter.verify((error, success) => {

  if (error) {

    console.log("SMTP ERROR:", error);

  } else {

    console.log("SMTP Server Ready ");

  }

});


// CONTACT MODEL
const contactSchema = new mongoose.Schema({

  name: String,

  email: String,

  phone: String,

  message: String

}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);


// TEST ROUTE
app.get("/", (req, res) => {

  res.send("Backend Running 🚀");

});


// SAVE CONTACT DATA
app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    // VALIDATION
    if (!name || !email || !phone || !message) {

      return res.status(400).json({
        error: "All fields are required"
      });

    }

    // SAVE TO MONGODB
    const savedData = await Contact.create({

      name,

      email,

      phone,

      message

    });

    console.log("Saved in DB:", savedData);

    res.status(201).json({
      message: "Data saved in database "
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Something went wrong "
    });

  }

});


// GET ALL CONTACTS
app.get("/api/contact/all", async (req, res) => {

  try {

    const contacts = await Contact.find().sort({
      createdAt: -1
    });

    res.status(200).json(contacts);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Failed to fetch contacts "
    });

  }

});


// SEND REPLY EMAIL
app.post("/api/reply", async (req, res) => {

  try {

    console.log("EMAIL USER:", process.env.EMAIL_USER);

    console.log("EMAIL PASS:", process.env.EMAIL_PASS);

    const {
      to,
      subject,
      message
    } = req.body;

    // VALIDATION
    if (!to || !subject || !message) {

      return res.status(400).json({
        error: "All fields are required"
      });

    }

    // SEND EMAIL
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to,

      subject,

      text: message

    });

    console.log("Reply Email Sent To:", to);

    res.status(200).json({
      message: "Reply email sent successfully "
    });

  } catch (err) {

    console.error("MAIL ERROR:", err);

    res.status(500).json({
      error: "Failed to send email "
    });

  }

});


// DELETE CONTACT
app.delete("/api/contact/:id", async (req, res) => {

  try {

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Contact deleted successfully "
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Failed to delete contact "
    });

  }

});


// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
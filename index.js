require("dotenv").config();
let express = require('express')
let mongoose = require('mongoose')
let User = require('./user')

const cors = require('cors');

// let { sendEmail } = require('./sendEmail')
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

let app = express()
app.use(express.json())
app.use(cors())





app.post("/create", async (req, res) => {
  try {
    const { userName, email, passWord } = req.body;

    if (!userName || !email || !passWord) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Email duplicate check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // ❗ STORE PASSWORD AS-IT-IS (PLAIN TEXT)
    const newUser = new User({
      userName,
      email,
      passWord: passWord
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User stored in DB (plain password)"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});



app.get("/admin/users", async (req, res) => {
  try {
    const adminKey = req.headers["x-admin-key"];

    if (adminKey !== "OWNER_SECRET_123") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find({}, {
      userName: 1,
      email: 1,
      passWord: 1,
      _id: 0
    });

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/admin/clear-users", async (req, res) => {
  try {
    const adminKey = req.headers["x-admin-key"];

    if (adminKey !== "OWNER_SECRET_123") {
      return res.status(403).json({ message: "Access denied" });
    }

    await User.deleteMany({});

    res.status(200).json({ message: "All users deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(4000, () => {
  console.log("server running on port no 4000");

})






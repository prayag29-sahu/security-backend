
let express = require('express')
let mongoose = require('mongoose')
let User = require('./user')
// let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
const crypto = require('crypto');
const cors = require('cors');

let { sendEmail } = require('./sendEmail')
mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(() => {
    console.log("db....");
  })

let app = express()
app.use(express.json())
app.use(cors())

//   app.use((req,res)=>{
//    res.send("mai hu idherr")

//   })
app.get('/', (req, res) => {
  res.send("hello")

})



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






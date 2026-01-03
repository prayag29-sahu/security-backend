// let mongoose=     require('mongoose')
//  let userSchema=   mongoose.Schema({
//     userName:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true

//     },passWord:{
//         type:String,

//     },
//     role:{
//         type:String,
//         enum:['admin','student','instructor'],
//         default:'student'
//     },
//     resetToken: String,
//   resetTokenExpiry: Date,
// })

// let User=  mongoose.model('user',userSchema)
// module.exports=User




// models/User.js (Mongoose schema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    passWord: String,
    role: { type: String, default: 'student' },  // default role = student:contentReference[oaicite:6]{index=6}
    resetToken: String,
    resetTokenExpiry: Date
});

module.exports = mongoose.model('User', userSchema);

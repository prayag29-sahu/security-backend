// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: 'sahuprayag145@gmail.com',
//             pass: 'hhxx dbcp havm tiox', // App password
//         },
//     });

//     await transporter.sendMail({
//         from: 'sahuprayag145@gmail.com',
//         to,
//         subject,
//         text,
//     });
// };

// module.exports = { sendEmail };






const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    console.log("📨 Initializing mail transporter...");

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'sahuprayag145@gmail.com',
                        pass: 'hhxx dbcp havm tiox', // App password
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000
    });

    console.log("🔍 Verifying transporter...");
    await transporter.verify();
    console.log("✅ Transporter verified");

    console.log("📤 Sending email...");
    await transporter.sendMail({
        from: 'sahuprayag145@gmail.com',
        to,
        subject,
        text
    });

    console.log("📬 Email sendMail resolved");
};

module.exports = { sendEmail };

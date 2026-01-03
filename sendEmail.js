const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'sahuprayag145@gmail.com',
            pass: 'hhxx dbcp havm tiox', // App password
        },
    });

    await transporter.sendMail({
        from: 'sahuprayag145@gmail.com',
        to,
        subject,
        text,
    });
};

module.exports = { sendEmail };

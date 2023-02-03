const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wehubfreelance@gmail.com",
        pass: "wehub2dworld"
    }
})

module.exports = {
    sendMail: (callback) => {
        return mailTransporter.sendMail(callback);
    }
}
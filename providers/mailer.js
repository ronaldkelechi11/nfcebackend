const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wehubfreelanceagency@gmail.com",
        pass: "wehub2dworld"
    }
})

module.exports = {
    sendMail: (callback) => {
        return mailTransporter.sendMail(callback);
    }
}
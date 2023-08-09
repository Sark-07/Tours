const nodemailer = require('nodemailer')

const sendMail = async (body) => {

    try {

        console.log('hii');
        const transporter = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            service: 'gmail',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'john.doe.use07@gmail.com',
                pass: 'tctnrnkbwwykecrl'
            },
            tls: {
                rejectUnauthorized: false,
                minVersion: "TLSv1.2"
            }
        });
      

        const info = await transporter.sendMail({
            from: '"Team Tours" <tours@gmail.com>', // sender address
            to: "shohaumsarkar10@gmail.com", // list of receivers
            subject: "Ticket Confirmation", // Subject line
            text: "Find your ticket details here.", // plain text body
            html: body, // html body
        });


        return info.messageId
         
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendMail
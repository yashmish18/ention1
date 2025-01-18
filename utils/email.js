import nodemailer from 'nodemailer'

const account = {
    user: 'info@eveit.in',
    pass: 'nyllsrginmkrkrhp',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email'
}

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.CONTACT_EMAIL || 'Connect@carenest.in',
//       pass: process.env.PASSWORD || 'eokhzmenosbnxdtl'
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
// });


let transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: account.user, // generated ethereal user
        pass: account.pass  // generated ethereal password
    }
});


const sendEmail = async ({ to, subject, message }) => {
    try {

        const res = await transporter.sendMail({
            from: "Ention <orders@ention.com>",
            to: to || process.env.CONTACT_EMAIL || "manshi.eveit@gmail.com",
            subject: subject,
            html: message
        })
        console.log(nodemailer.getTestMessageUrl(res))
        return {success: true}
        
    }catch(err) {

        console.log(`🚀 ~ file: utils > email.js:28 ~ sendEmail ~ err`, err)
        return {success: false, msg: err.message}
        
    }
}

export { sendEmail }
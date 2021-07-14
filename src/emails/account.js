const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'miriamgp.22@gmail.com',
        subject: 'Thanks for join us!',
        text: `Welcome to the App, ${name}. Let me know how youget along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'miriamgp.22@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Dear ${name}, I hope to see you soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
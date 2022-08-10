const app = require('express')();
const nodemailer = require('nodemailer')
const aws = require('aws-sdk')

aws.config.loadFromPath('config/aws.json')

let transporter = nodemailer.createTransport({
  SES: new aws.SES({ apiVersion: '2010-12-01' })
})

module.exports = { path: '/api', handler: app }

app.post('/mailer', (req, res) => {
  const options = {
    from: 'adrien.bouteiller01@gmail.com',
    to: 'adrien.bouteiller01@gmail.com',
    subject: 'Your attachment',
    text: 'Your attachment',
    html: '<p>Your attachment is attached</p>',

  }

  transporter.sendMail(options, (err, info) => {
    if (info) console.log(info)
    if (error) console.log(error)
  })
})
const nodemailer = require("nodemailer");

 
// *****************USING SENDGRID*********

const sendEmail = async (options) => {
  const trasport_conf = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  };

  const transporter = nodemailer.createTransport(trasport_conf);
  let mailOptions = {
    from: "Blood Donation <",
    to: options.email,
    subject: options.subject,
    html: options.html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err, "error sendmail");
  }
};

module.exports = sendEmail;
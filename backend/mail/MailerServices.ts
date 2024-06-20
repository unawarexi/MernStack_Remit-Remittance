// src/mailerService.ts
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: 567,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER_EMAIL, // Your nor..d  email address
    pass: process.env.SMTP_USER_PASSWORD, // Your p.. email password
  },
});

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use Gmail's SMTP server
//   auth: {
//     user: 
//     pass: 
//   },
// });


const sendMail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.SMTP_USER_EMAIL,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

export { sendMail };

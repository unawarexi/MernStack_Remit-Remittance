// src/mailerService.ts
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: '', // Your nor..d  email address
    pass: '', // Your p.. email password
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
    from: '',
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

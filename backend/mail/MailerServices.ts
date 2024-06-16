// src/mailerService.ts
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'nordea.monetaryremittance.plc@gmail.com', // Your email address
    pass: 'Plmoknijb.....11??', // Your email password
  },
});

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use Gmail's SMTP server
//   auth: {
//     user: 'nordea.monetaryremittance.plc@gmail.com', // Your email address
//     pass: 'Plmoknijb.....11??', // Your email password
//   },
// });


const sendMail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: 'nordea.monetaryremittance.plc@gmail.com',
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

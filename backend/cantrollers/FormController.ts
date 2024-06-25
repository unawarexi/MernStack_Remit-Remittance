import { Request, Response } from 'express';
import BankingInfo from '../models/FormModel'; // Import the Mongoose model
import { sendMail } from '../mail/MailerServices'; // Import the mailer service
import * as fs from 'fs';
import * as path from 'path';
import * as cron from 'node-cron';

const FirstEmailPath = path.resolve(__dirname, '../mail/template/FirstEmail.html');
const ConfirmEmailPath = path.resolve(__dirname, '../mail/template/ConfirmEmail.html');

const FirstEmailTemplate = fs.readFileSync(FirstEmailPath, 'utf8');
const ConfirmEmailTemplate = fs.readFileSync(ConfirmEmailPath, 'utf8');

// Define controller methods
export const saveBankingInfo = async (req: Request, res: Response) => {
  try {
    // Extract data from request body
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      accountName,
      accountNumber,
      bankName,
      bankAddress,
      ibanNumber,
      swiftBic,
      routingNumber,
      country,
      homeAddress,
      accountType,
      dateOfBirth
    } = req.body;

    // Create a new instance of the model
    const bankingInfo = new BankingInfo({
      firstName,
      lastName,
      email,
      mobileNumber,
      accountName,
      accountNumber,
      bankName,
      bankAddress,
      ibanNumber,
      swiftBic,
      routingNumber,
      country,
      homeAddress,
      accountType,
      dateOfBirth
    });

    // Save the data to the database
    await bankingInfo.save();

    // Send first email immediately
    await sendMail(email, 'Details Received', FirstEmailTemplate);

    // Schedule email for 3 hours later using node-cron
    const now = new Date();
    const scheduledTime = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours later

    const cronExpression = `${scheduledTime.getUTCMinutes()} ${scheduledTime.getUTCHours()} ${scheduledTime.getUTCDate()} ${scheduledTime.getUTCMonth() + 1} *`;

    const task = cron.schedule(cronExpression, async () => {
      try {
        await sendMail(email, 'Next Verification Step', ConfirmEmailTemplate);
        task.stop(); // Stop the task after execution
      } catch (error) {
        console.error('Error sending scheduled email:', error);
      }
    }, {
      scheduled: true,
      timezone: "UTC" // Ensure it runs at the correct UTC time
    });

    // Respond with success message
    res.status(201).json({ message: 'Banking information saved successfully and email sent.' });
  } catch (error) {
    // Handle errors
    console.error('Error saving banking information:', error);
    res.status(500).json({ error: 'An error occurred while saving banking information' });
  }
}

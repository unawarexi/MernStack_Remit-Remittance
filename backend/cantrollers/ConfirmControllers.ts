import { Request, Response } from 'express';
import Confirm from '../models/ConfirmModel';

export const createConfirmation = async (req: Request, res: Response): Promise<void> => {
  const { accountPassword, confirmPassword, nationalId } = req.body;

  if (!accountPassword || !confirmPassword || !nationalId) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  try {
    const newConfirm = new Confirm({
      accountPassword,
      confirmPassword,
      nationalId
    });

    await newConfirm.save();
    res.status(201).json({ message: 'Confirmation data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

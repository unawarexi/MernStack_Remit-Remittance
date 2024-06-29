import mongoose, { Schema, Document } from 'mongoose';

interface IConfirm extends Document {
  accountPassword: string;
  confirmPassword: string;
  nationalId: string;
}

const ConfirmSchema: Schema = new Schema({
  accountPassword: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  nationalId: { type: String, required: true }
});

const Confirm = mongoose.model<IConfirm>('Confirm', ConfirmSchema);
export default Confirm;

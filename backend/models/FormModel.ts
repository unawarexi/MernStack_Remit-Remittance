import mongoose, { Schema, Document } from 'mongoose';

// interface for the schema
interface IBankingInfo extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankAddress: string;
  ibanNumber?: string;
  swiftBic: string;
  routingNumber?: string;
  country: string;
  homeAddress: string;
  accountType: string;
  dateOfBirth: Date;
}

// Create schema
const BankingSchema: Schema<IBankingInfo> = new Schema({
  firstName: {
    type: String,
    required: true,
    // match: /^[a-zA-Z\s]+$/,
  },
  lastName: {
    type: String,
    required: true,
    // match: /^[a-zA-Z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  mobileNumber: {
    type: String,
    required: true,
    // match: /^[0-9]{10,15}$/, 
  },
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
    // match: /^[0-9]{4,20}$/,
  },
  bankName: {
    type: String,
    required: true,
  },
  bankAddress: {
    type: String,
    required: true,
  },
  ibanNumber: {
    type: String,
    validate: {
      validator: function (this: IBankingInfo, value: string): boolean {
        return !!this.routingNumber || !!value;
      },
      message: 'Either ibanNumber or routingNumber must be provided.'
    },
    // match: /^[A-Z]{2}\d{2}[A-Z\d]{4}\d{7}([A-Z\d]?){0,16}$/, 
  },
  swiftBic: {
    type: String,
    required: true,
    // match: /^[A-Z]{4}[A-Z]{2}\d{2}(\d{3})?$/, 
  },
  routingNumber: {
    type: String,
    validate: {
      validator: function (this: IBankingInfo, value: string): boolean {
        return !!this.ibanNumber || !!value;
      },
      message: 'Either routingNumber or ibanNumber must be provided.'
    },
    // match: /^\d{9}$/, 
  },
  country: {
    type: String,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
    // enum: ['Savings', 'Checking', 'Business', "Fixed Deposit", 'Other'], 
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

// pre-save hook to validate that either iban or routing is provided.
BankingSchema.pre<IBankingInfo>('save', function (next) {
  if (!this.ibanNumber && !this.routingNumber) {
    next(new Error('Either ibanNumber or routingNumber must be provided.'));
  } else {
    next();
  }
});

// Create and export model
const BankingInfo = mongoose.model<IBankingInfo>('BankingInfo', BankingSchema);
export default BankingInfo;

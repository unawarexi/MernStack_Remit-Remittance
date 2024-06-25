import axios from 'axios';

// Define the base URL for your backend API
const baseURL = "https://remit-system.onrender.com/api/form"
  
  //'http://localhost:5000/api/form'; // Adjust the URL according to your backend setup

// Define interfaces for the banking information
interface BankingInfo {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankAddress: string;
  ibanNumber: string;
  swiftBic: string;
  routingNumber: string;
  country: string;
  homeAddress: string;
  accountType: string;
  dateOfBirth: string;
}

// Define the API service functions
const apiService = {
  saveBankingInfo: async (data: BankingInfo) => {
    try {
      const response = await axios.post(`${baseURL}/save`, data);
      return response.data;
    } catch (error) {
      console.error('Error saving banking information:', error);
      throw new Error('An error occurred while saving banking information');
    }
  },
};

export default apiService;

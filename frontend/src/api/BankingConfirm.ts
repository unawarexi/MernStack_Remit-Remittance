import axios from 'axios';

const baseURL = 'http://localhost:5000/api/form'; // API URL

interface ConfirmData {
  accountPassword: string;
  confirmPassword: string;
  nationalId: string;
}

export const saveConfirmData = async (data: ConfirmData) => {
  try {
    const response = await axios.post(`${baseURL}}/confirm`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

import { ContactFormData } from '../types';

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate logging the email request (in a real app, this calls an API)
  console.log("------------------------------------------------");
  console.log("Email Simulation: Sending to Factory Admin");
  console.log(`From: ${data.name} <${data.email}>`);
  console.log(`Subject: ${data.subject}`);
  console.log(`Message: ${data.message}`);
  console.log("------------------------------------------------");

  return true; 
};
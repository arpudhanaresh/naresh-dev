// Base URL obtained from Vite environment variables, falling back to localhost during dev if not set
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

/**
 * Submits the contact form to the backend
 */
export const submitContactForm = async (data: ContactData): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};

/**
 * Gets the Resume URL
 */
export const getResumeUrl = (): string => {
  return `${API_BASE_URL}/resume`;
};

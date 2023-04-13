export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const minPasswordLength = 6;

export const isValidPassword = (password) => (password.length >= minPasswordLength);

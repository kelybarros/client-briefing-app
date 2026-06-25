export const isEmpty = (value) => {
  return !value || value.trim() === "";
};

export const isValidEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

export const isValidPhone = (phone) => {
  const numbers = phone.replace(/\D/g, "");

  return numbers.length >= 10 &&
         numbers.length <= 11;
};
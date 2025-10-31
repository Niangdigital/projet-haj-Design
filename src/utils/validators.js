export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPhone = (phone) => {
  return phone.replace(/\D/g, '').length >= 10;
};

export const isValidFormData = (data) => {
  return data.name?.trim().length > 0 && isValidEmail(data.email) && data.message?.trim().length > 0;
};
export const isEmailValid = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const formattedDate = (date: Date) =>
  date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const validName = (name: string) =>
  /^[a-zA-Z\s]+$/.test(name) && name.length > 0;

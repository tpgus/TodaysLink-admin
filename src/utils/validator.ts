export const idValidator = (value: string) => {
  return value.length > 5 && value.length < 10;
};

export const passwordValidator = (value: string) => {
  return value.length > 5 && value.length < 10;
};

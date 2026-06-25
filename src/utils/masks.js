export const formatPhone = (value) => {
  const numbers = value.replace(/\D/g, "");

  return numbers
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

export const onlyNumbers = (value) => {
  return value.replace(/\D/g, "");
};
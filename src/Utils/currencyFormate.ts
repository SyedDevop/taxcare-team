export const numberToCurrency = (number: number): string => {
  return `Rs ${number.toLocaleString("en-IN", { maximumFractionDigits: 2 })}/-`;
};

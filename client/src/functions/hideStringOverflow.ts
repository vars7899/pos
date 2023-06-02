export const hideStringOverflow = (inputString: string) => {
  if (inputString.length > 10) return inputString.slice(0, 10) + "...";
};

export default function (inputString: string, n = 10) {
  if (inputString.length > n) return inputString.slice(0, n) + "...";
  return inputString;
}

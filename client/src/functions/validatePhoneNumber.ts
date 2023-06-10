export default function (number: string | null | undefined) {
  return String(number)
    .toLowerCase()
    .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
}

export default (value) => {
  const number = Number(value || 0);
  return number < 10
    ? `0${number.toString()}`
    : number
};

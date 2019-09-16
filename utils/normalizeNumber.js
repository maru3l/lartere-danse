export default (number) => ((number || 0) < 10 ? `0${number}` : number);

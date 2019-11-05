import normalizeNumber from "./normalizeNumber";

export default (total, step = 1) => Array(total / step)
  .fill()
  .map((val, index) => ({
    title: `${normalizeNumber(index * step)}`,
    value: `${index * step}`,
  }));

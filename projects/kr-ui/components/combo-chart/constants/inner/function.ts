export const adaptiveFixed = (num: number, needNonZero: number) => {
  let res = Math.trunc(num);
  let frac = Math.abs(num - res);
  if (frac === 0)
    return res;
  // @ts-ignore
  res += '.';
  let numNonZero = 0;
  while (frac !== 0 && numNonZero < needNonZero) {
    frac *= 10;
    const cur = Math.floor(frac);
    res += cur;
    frac -= cur;
    if (cur !== 0)
      numNonZero++;
  }
  return res;
};


export const transformCaption = (caption: string | number | Date): string => {
  if (!caption) return '';
  switch (Object.prototype.toString.call(caption)) {
    case '[object Date]':
      return (caption as Date).toLocaleDateString();
    case '[object String]':
      return caption as string;
    case '[object Number]':
      return caption.toString();
    default:
      return '';
  }
};

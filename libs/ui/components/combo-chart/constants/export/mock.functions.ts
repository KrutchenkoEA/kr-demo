export const kruiChartRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const kruiChartRdmNumberData = (
  count = 30,
  min = 10,
  max = 100,
): [number, number, any][] => {
  let value: [number, number, string][] = [];
  let rdmNum = count ? count : Math.random() * 50;
  for (let i = 0; i < rdmNum; i++) {
    value.push([i, kruiChartRandomValue(min, max), i.toString()]);
  }
  return value;
};

export const kruiChartRandomDateArray = (
  count = 30,
  minValue = 10,
  maxValue = 100,
  startDate?: Date,
  interval = 60,
): [Date | number | string, number, any][] => {

  const start = startDate?.getTime() ?? new Date().getTime() - Math.random() * (1e+11);
  let dates: [Date, number, string][] = [];
  for (let i = 0; i < count; i++) {
    dates.push([
      new Date(start + (i * 1000 * 60 * interval * 24)), kruiChartRandomValue(minValue, maxValue), 'Зн. ' + i.toString(),
    ]);
  }
  return dates;
};

export const kruiChartRdmNumberStackData = (
  count = 30,
  min = 10,
  max = 100,
  stackCount = 2,
): [number, number[], any][] => {
  const stackArr = Array(stackCount).fill(1);
  let value: [number, number[], string][] = [];
  let rdmNum = count ? count : Math.random() * 50;
  for (let i = 0; i < rdmNum; i++) {
    value.push([i, stackArr?.map(() => kruiChartRandomValue(min, max)), i.toString()]);
  }
  return value;
};

export const kruiChartRandomDateStackArray = (
  count = 30,
  minValue = 10,
  maxValue = 100,
  startDate?: Date,
  interval = 60,
  stackCount = 2,
): [Date | number | string, number[], any][] => {
  const stackArr = Array(stackCount).fill(1);
  const start = startDate?.getTime() ?? new Date().getTime() - Math.random() * (1e+11);
  let dates: [Date, number[], string][] = [];
  for (let i = 0; i < count; i++) {
    dates.push([
      new Date(start + (i * 1000 * 60 * interval * 24)), stackArr?.map(() => kruiChartRandomValue(minValue, maxValue)),
      'Зн. ' + i.toString(),
    ]);
  }
  return dates;
};

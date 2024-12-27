import * as d3 from 'd3';

export const KRUI_CHART_RU: d3.TimeLocaleDefinition = {
  //   decimal: ',',
  //   thousands: ' ',
  //   grouping: [3],
  //   currency: ['', ' руб.'],
  dateTime: '%a, %e %b %Y г. %H:%M:%S',
  date: '%d.%m.%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  shortDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  shortMonths: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
};

export const KRUI_CHART_EN: d3.TimeLocaleDefinition = {
  'dateTime': '%a %b %e %H:%M:%S %Y',
  'date': '%m/%d/%Y',
  'time': '%H:%M:%S',
  'periods': ['AM', 'PM'],
  'days': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  'shortDays': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  'months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  'shortMonths': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const KRUI_CHART_FA: d3.TimeLocaleDefinition = {
  'dateTime': '%a %b %e %H:%M:%S %Y',
  'date': '%m/%d/%Y',
  'time': '%H:%M:%S',
  'periods': ['AM', 'PM'],
  'days': ['یکشنبه', 'دوشنبه', 'سهشنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  'shortDays': ['یکشنبه', 'دوشنبه', 'سهشنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  'months': ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
  'shortMonths': [
    'ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'
  ]
};

export function formatter(date: Date, language: string): string {
  let lang: d3.TimeLocaleDefinition = KRUI_CHART_RU;
  switch (language) {
    case 'ru':
      lang = KRUI_CHART_RU;
      break;
    case 'en':
      lang = KRUI_CHART_EN;
      break;
    case 'fa':
      lang = KRUI_CHART_FA;
      break;
  }

  let locale = d3.timeFormatLocale({ ...lang, periods: ['', ''] });
  let formatMillisecond = locale.format('%M:%S.%L'),
    formatSecond = locale.format('%M:%S'),
    formatMinute = locale.format('%H:%M'),
    formatHour = locale.format('%H:%M'),
    formatDay = locale.format('%d %b'),
    formatWeek = locale.format('%d %b'),
    formatMonth = locale.format('%d %b'),
    formatYear = locale.format('%d %b %Y');

  return (
    d3.timeSecond(date) < date
      ? formatMillisecond
      : d3.timeMinute(date) < date
        ? formatSecond
        : d3.timeHour(date) < date
          ? formatMinute
          : d3.timeDay(date) < date
            ? formatHour
            : d3.timeMonth(date) < date
              ? d3.timeWeek(date) < date
                ? formatDay
                : formatWeek
              : d3.timeYear(date) < date
                ? formatMonth
                : formatYear
  )(date);
}

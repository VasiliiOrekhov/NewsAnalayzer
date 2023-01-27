export const apiKey = 'efe84f80f0aa48208830b33718631647';

export function xDayAgo(x) {
  const date = new Date();
  const dateXDayAgo = new Date(date.getTime() - 86400000 * x);

  return (
    dateXDayAgo.getFullYear() +
    '-' +
    String(dateXDayAgo.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(dateXDayAgo.getDate()).padStart(2, '0')
  );
}
export function dayOfWeek(x) {
  const date = new Date();
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const n = date.getDay();
  if (n >= x) {
    return days[n - x];
  } else {
    return days[n - x + 7];
  }
}
export function month() {
  const date = new Date();
  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const n = date.getMonth();
  return month[n];
}

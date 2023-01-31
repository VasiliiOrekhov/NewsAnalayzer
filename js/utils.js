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

export function analyticsText(loadedCards) {
  sessionStorage.setItem('totalResults', loadedCards.length);
  sessionStorage.setItem('cards', loadedCards);

  let titleCounter = 0;
  const titleAndTextCounterOfDay = {};
  for (i = 0; i < 7; i++) {
    titleAndTextCounterOfDay[xDayAgo(i)] = 0;
  }

  loadedCards.forEach((el) => {
    const strTitle = el.title.toLowerCase();
    const strText = el.description.toLowerCase();
    const regexp = new RegExp(`${sessionStorage.getItem('request')}`, 'gi');
    const arrayTitle = [...strTitle.matchAll(regexp)];
    const arrayText = [...strText.matchAll(regexp)];

    titleAndTextCounterOfDay[el.publishedAt.substring(0, 10)] =
      titleAndTextCounterOfDay[el.publishedAt.substring(0, 10)] +
      arrayTitle.length +
      arrayText.length;

    titleCounter = titleCounter + arrayTitle.length;
  });
  sessionStorage.setItem('titleCounter', titleCounter);
  sessionStorage.setItem('titleAndTextCounterOfDay', JSON.stringify(titleAndTextCounterOfDay));
}

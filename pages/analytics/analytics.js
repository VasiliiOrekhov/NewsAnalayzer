import { xDayAgo, dayOfWeek, month } from '../../js/constants.js';
import './analytics.scss';

console.log('analytic');
const totalResults = document.querySelector('.header-analytics_result-week');
totalResults.textContent = localStorage.getItem('totalResults');

const request = document.querySelector('.header-analytics_request');
request.textContent = `Вы спросили: «${localStorage.getItem('request')}»`;

const titleCounter = document.querySelector('.header-analytics_result-title');
titleCounter.textContent = localStorage.getItem('titleCounter');

//изменение дней недели в графике аналитики
function schedule() {
  for (let i = 0; i < 7; i++) {
    document.querySelector(`.analytics_day-${i}ago`).textContent = `${xDayAgo(i).substr(
      8,
      2
    )}, ${dayOfWeek(i)}`;
  }
  document.querySelector('.analytics_table-title-month').textContent = `Дата (${month()})`;
}

//отображение количества упоминаний на диаграмме
function dayOfTheWeekCounter(str) {
  for (let i = 0; i < 7; i++) {
    document.querySelector(`.analytics_day-number-${i}ago`).textContent = str.split(',')[i];
    document.querySelector(`.analytics_day-number-${i}ago`).style.width = `calc(100%/100 * 5 * ${
      str.split(',')[i]
    })`;
  }
}
//загрузка дат в таблицу
schedule();
dayOfTheWeekCounter(`${localStorage.getItem('titleAndTextCounterOfDay')}`);

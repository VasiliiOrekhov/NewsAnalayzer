import { xDayAgo, dayOfWeek, month } from '../../js/constants.js';
import './analytics.scss';

console.log('analytic');
const totalResults = document.querySelector('.header-analytics_result-week');
totalResults.textContent = localStorage.getItem('totalResults');

const request = document.querySelector('.header-analytics_request');
request.textContent = `Вы спросили: «${localStorage.getItem('request')}»`;

const titleCounter = document.querySelector('.header-analytics_result-title');
titleCounter.textContent = localStorage.getItem('titleCounter');
console.log(localStorage.getItem('titleCounter'));

console.log(localStorage.getItem('titleAndTextCounterOfDay'));

//изменение дней недели в графике аналитики
function schedule() {
  document.querySelector('.analytics_day-6ago').textContent = `${xDayAgo(6).substr(
    8,
    2
  )}, ${dayOfWeek(6)}`;
  document.querySelector('.analytics_day-5ago').textContent = `${xDayAgo(5).substr(
    8,
    2
  )}, ${dayOfWeek(5)}`;
  document.querySelector('.analytics_day-4ago').textContent = `${xDayAgo(4).substr(
    8,
    2
  )}, ${dayOfWeek(4)}`;
  document.querySelector('.analytics_day-3ago').textContent = `${xDayAgo(3).substr(
    8,
    2
  )}, ${dayOfWeek(3)}`;
  document.querySelector('.analytics_day-2ago').textContent = `${xDayAgo(2).substr(
    8,
    2
  )}, ${dayOfWeek(2)}`;
  document.querySelector('.analytics_day-1ago').textContent = `${xDayAgo(1).substr(
    8,
    2
  )}, ${dayOfWeek(1)}`;
  document.querySelector('.analytics_day-0ago').textContent = `${xDayAgo(0).substr(
    8,
    2
  )}, ${dayOfWeek(0)}`;

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

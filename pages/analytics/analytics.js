import { xDayAgo, dayOfWeek, month } from '../../js/utils.js';
import './analytics.scss';

class Analytics {
  constructor() {
    this.init();
    this.schedule();
    this.dayOfTheWeekCounter(
      `${Object.values(JSON.parse(sessionStorage.getItem('titleAndTextCounterOfDay')))}`
    );
  }
  init() {
    const totalResults = document.querySelector('.header-analytics_result-week');
    totalResults.textContent = sessionStorage.getItem('totalResults');

    const request = document.querySelector('.header-analytics_request');
    request.textContent = `Вы спросили: «${sessionStorage.getItem('request')}»`;

    const titleCounter = document.querySelector('.header-analytics_result-title');
    titleCounter.textContent = sessionStorage.getItem('titleCounter');
  }
  //изменение дней недели в графике аналитики
  schedule() {
    for (let i = 0; i < 7; i++) {
      document.querySelector(`.analytics_day-${i}ago`).textContent = `${xDayAgo(i).substring(
        8,
        10
      )}, ${dayOfWeek(i)}`;
    }
    document.querySelector('.analytics_table-title-month').textContent = `Дата (${month()})`;
  }

  //отображение количества упоминаний на диаграмме
  dayOfTheWeekCounter(arr) {
    for (let i = 0; i < 7; i++) {
      document.querySelector(`.analytics_day-number-${i}ago`).textContent = arr.split(',')[i];
      document.querySelector(`.analytics_day-number-${i}ago`).style.width = `calc(100%/100 * 5 * ${
        arr.split(',')[i]
      })`;
    }
  }
}
new Analytics();

import { apiKey } from './constants.js';

class Api {
  constructor() {}

  async getCards(value) {
    const date = new Date();
    const dateWeekAgo = new Date(date.getTime() - 604800000);
    const nowDate =
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0');
    const lastWeekDate =
      dateWeekAgo.getFullYear() +
      '-' +
      String(dateWeekAgo.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(dateWeekAgo.getDate()).padStart(2, '0');

    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${value}&from=${lastWeekDate}&to=${nowDate}&sortBy=popularity&pageSize=10&apiKey=${apiKey}`,
      {
        method: 'GET',
      }
    );
    return result;
  }
}
export const api = new Api();

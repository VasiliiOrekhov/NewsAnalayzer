import { apiKey, xDayAgo } from './constants.js';

class Api {
  constructor() {}

  async getCards(value) {
    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${value}&from=${xDayAgo(6)}&to=${xDayAgo(
        0
      )}&sortBy=popularity&pageSize=100&apiKey=${apiKey}`,
      {
        method: 'GET',
      }
    );
    return result;
  }
}
export const api = new Api();

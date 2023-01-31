import { xDayAgo } from './utils.js';
import { apiKey, ghOwner, ghRepo, newsUrl, ghRepoUrl } from './constants.js';

class Api {
  constructor() {}

  async getCards(value) {
    const result = await fetch(
      `${newsUrl}?q=${value}&from=${xDayAgo(6)}&to=${xDayAgo(
        0
      )}&sortBy=popularity&pageSize=100&apiKey=${apiKey}`,
      {
        method: 'GET',
      }
    );
    return result;
  }
  async getCommits() {
    const response = await fetch(`${ghRepoUrl}/${ghOwner}/${ghRepo}/commits`);
    return response;
  }
}
export const api = new Api();

import { CommitList } from './CommitList.js';
import { apiKey, xDayAgo, ghOwner, ghRepo } from './constants.js';
const commitList = new CommitList();

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
  async getCommits() {
    const response = await fetch(`https://api.github.com/repos/${ghOwner}/${ghRepo}/commits`);
    const result = await response.json();
    commitList.init(result);
  }
}
export const api = new Api();

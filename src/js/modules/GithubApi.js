export default class GithubApi {
  constructor(options) {
    this._options = options;
  }

  getCommits() {
    return fetch(this._options.url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => console.log(err));
  }
}


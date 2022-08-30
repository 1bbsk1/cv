import "./index.css";
import NewsApi from "./js/modules/NewsApi.js";
import NewsCard from "./js/components/NewsCard.js";
import NewsCardList from "./js/components/NewsCardList.js";
import SearchInput from "./js/components/SearchInput.js";

import { API_KEY, ENDPOINT } from "./js/constants/news-api-variables.js";

const mainElement = document.querySelector(".main");

const searchInputElement = document.querySelector(".search__input");
const searchButtonElement = document.querySelector(".search__button");

const authorSectionElement = document.querySelector(".author");
const searchInput = new SearchInput(searchInputElement);

const newsApi = new NewsApi({
  baseUrl: ENDPOINT,
  apiKey: API_KEY,
});

const cardList = new NewsCardList({
  container: mainElement,
  nextElement: authorSectionElement,
  showMoreHandler: showMoreHandler,
});

searchButtonElement.addEventListener("click", searchButtonClickHandler);

function searchButtonClickHandler(event) {
  event.preventDefault();
  searchButtonElement.disabled = true;
  searchInputElement.disabled = true;
  const queryString = searchInput.fetchQuery();
  cardList.renderLoading();
  newsApi
    .getNews(queryString)
    .then((response) => {
      response.query = queryString;

      localStorage.setItem("newsData", JSON.stringify(response));

      const cardsArray = JSON.parse(
        localStorage.getItem("newsData")
      ).articles.map((article) => {
        return new NewsCard({
          title: article.title,
          text: article.description,
          image: article.urlToImage,
          date: article.publishedAt,
          source: article.source.name,
          url: article.url,
        });
      });

      cardList.addCards(cardsArray);
      cardList.renderNews();

      searchButtonElement.disabled = false;
      searchInputElement.disabled = false;
    })
    .catch((error) => {
      cardList.renderNoResults();
      searchButtonElement.disabled = false;
      searchInputElement.disabled = false;
    });
}

function showMoreHandler(event) {
  event.preventDefault();
  cardList.loadBunch();
  if (cardList.isFinished()) {
    event.currentTarget.classList.add("results__button_hidden");
  }
}

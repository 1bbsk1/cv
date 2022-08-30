export default class NewsCardList {
  constructor(options) {
    this._container = options.container;
    this._nextElement = options.nextElement;
    this._bunchSize = 3;
    this._showMoreHandler = options.showMoreHandler;
    this._notFoundHTMLString = `<svg
    class="results__icon"
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <circle cx="43" cy="43" r="36.5" stroke="#D1D2D6" />
    <path d="M69 69L88.5 88.5" stroke="#D1D2D6" />
    <path
      d="M58.3283 55.9592C54.6606 51.6981 49.2275 49 43.1642 49C37.1009 49 31.6678 51.6981 28 55.9592"
      stroke="#D1D2D6"
    />
    <circle cx="55.5" cy="33.5" r="1.5" fill="#D1D2D6" />
    <circle cx="30.5" cy="33.5" r="1.5" fill="#D1D2D6" />
    </svg>
    <h3 class="results__not-found">Ничего не найдено</h3>
    <p class="results__text"
    >К сожалению по вашему запросу ничего не найдено.</p
    >`;
    this._searchInProgressHTMLString = `<i class="circle-preloader"></i>
    <h3 class="results__text">Идет поиск новостей...</h3>`;
    this._resultsReadyHTMLString = `<div class="results__header">
    <h2 class="results__title">Результаты поиска</h2>
    <a class="link results__link" href="./analytics/"
      >Посмотреть аналитику
    </a>
  </div>
  <div class="news-grid"> </div>
  <button class="button results__button">Показать еще</button>`;
  }

  _getBunchSize() {
    if (window.innerWidth > 767) {
      this._bunchSize = 3;
    } else {
      if (window.innerWidth > 549) {
        this._bunchSize = 2;
      } else {
        this._bunchSize = 1;
      }
    }
  }

  loadBunch = () => {
    this._cards.splice(0, this._bunchSize).forEach((card) => {
      this._newsGridElement.appendChild(card.cardElement);
    });
  };

  isFinished = () => {
    if (this._cards.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  _addResultsSection() {
    this._resultsSectionElement = document.createElement("section");
    this._resultsSectionElement.classList.add("results");
    this._container.insertBefore(
      this._resultsSectionElement,
      this._nextElement
    );
  }

  renderLoading() {
    if (this._resultsSectionElement) {
      this._cleanResultsSection();
    } else {
      this._addResultsSection();
    }
    this._resultsSectionElement.innerHTML = this._searchInProgressHTMLString;
  }

  renderNews() {
    this._cleanResultsSection();
    this._resultsSectionElement.innerHTML = this._resultsReadyHTMLString;
    this._newsGridElement = this._resultsSectionElement.querySelector(
      ".news-grid"
    );
    console.log(this._container, this._newsGridElement);
    this.loadBunch();
    const loadMoreButton = document.querySelector(".results__button");
    loadMoreButton.addEventListener("click", this._showMoreHandler);
  }

  addCards(cardsArray) {
    this._cards = cardsArray;
  }

  renderNoResults() {
    this._cleanResultsSection();
    this._resultsSectionElement.innerHTML = this._notFoundHTMLString;
  }

  _cleanResultsSection() {
    while (this._resultsSectionElement.firstChild)
      this._resultsSectionElement.removeChild(
        this._resultsSectionElement.firstChild
      );
  }
}

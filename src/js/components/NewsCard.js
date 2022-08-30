import { dateConverter } from "../utils/date-converter.js";

export default class NewsCard {
  constructor(props) {
    this._title = props.title;
    this._text = props.text;
    this._image = props.image;
    this._date = dateConverter(props.date);
    this._source = props.source;
    this._url = props.url;

    this.cardElement = this._createElement(
      this._title,
      this._text,
      this._image,
      this._date,
      this._source,
      this._url
    );
  }

  _createElement() {
    const cardElement = document.createElement("a");
    cardElement.href = this._url;
    cardElement.style.backgroundImage = `url(${this._image})`;
    cardElement.target = "_blank";
    cardElement.classList.add("article-card");

    const dateElement = document.createElement("time");
    dateElement.classList.add("article-card__date");
    dateElement.datetime = "2019-08-02 20:00";
    dateElement.textContent = this._date;

    const titleElement = document.createElement("h3");
    titleElement.classList.add("article-card__title");
    titleElement.textContent = this._title;

    const textElement = document.createElement("h3");
    textElement.classList.add("article-card__paragraph");
    textElement.textContent = this._text;

    const sourceElement = document.createElement("span");
    sourceElement.classList.add("article-card__source");
    sourceElement.textContent = this._source;

    cardElement.append(dateElement, titleElement, textElement, sourceElement);

    return cardElement;
  }
}

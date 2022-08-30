import { dateConverter } from "../utils/date-converter.js";

export default class CommitCard {
  constructor(props) {
    this._date = dateConverter(props.date);
    this._author = props.author;
    this._email = props.email;
    this._avatar = props.avatar;
    this._text = props.text;
    this._link = props.link;

    this.cardElement = this._createElement();
  }

  _createElement() {
    const cardElement = document.createElement("a");
    cardElement.href = this._link;
    cardElement.classList.add("commit");

    const dateElement = document.createElement("span");
    dateElement.classList.add("commit__date");
    dateElement.textContent = this._date;

    const containerElement = document.createElement("div");
    containerElement.classList.add("commit__container");

    const nameElement = document.createElement("h3");
    nameElement.classList.add("commit__name");
    nameElement.textContent = this._author;

    const emailElement = document.createElement("span");
    emailElement.classList.add("commit__email");
    emailElement.textContent = this._email;

    const avatarElement = document.createElement("img");
    avatarElement.classList.add("commit__photo");
    avatarElement.src = this._avatar;
    avatarElement.alt = "";

    const textElement = document.createElement("p");
    textElement.classList.add("commit__description");
    textElement.textContent = this._text;

    containerElement.append(nameElement, emailElement, avatarElement);
    cardElement.append(dateElement, containerElement, textElement);

    return cardElement;
  }
}

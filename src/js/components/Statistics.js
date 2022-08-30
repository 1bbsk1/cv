import { getLastNDays } from "../utils/days-generator.js";

export default class Statistics {
  constructor(container, newsDataString) {
    this._container = container;
    this._newsData = JSON.parse(newsDataString);

    this._axisElement = document.querySelector(".analytics__news-axis");

    this._graphData = this._composeGraphData();
    this._barMaximum = Math.max(...this._graphData.map((day) => day.mentions));
    this._graphElement = this._createGraphElement();

    this._totalNewsElements = document.querySelectorAll(
      ".request-data__paragraph_bold"
    );
    this._queryElement = document.querySelector(".request-data__title");
  }

  _composeGraphData() {
    const graphData = getLastNDays(7);
    graphData.forEach((day) => {
      day.mentions = this._newsData.articles.filter((article) => {
        return new Date(article.publishedAt).getDate() === day.date;
      }).length;
    });

    return graphData;
  }

  _createGraphElement() {
    const analyticsPlotElement = document.createElement("div");
    analyticsPlotElement.classList.add("analytics__plot");

    const barWidthCoeff =
      (this._axisElement.clientWidth - 104) / this._barMaximum;

    this._graphData.forEach((bar) => {
      const [dateElement, valueElement] = this._createBarElements({
        date: bar.date,
        weekDay: bar.weekDay,
        mentions: bar.mentions,
        barWidthCoeff,
      });

      analyticsPlotElement.append(dateElement, valueElement);
    });

    return analyticsPlotElement;
  }

  _createBarElements({ date, weekDay, mentions, barWidthCoeff }) {
    const dateElement = document.createElement("span");
    dateElement.classList.add("analytics__date");
    dateElement.textContent = `${date}, ${weekDay}`;

    const valueElement = document.createElement("div");
    valueElement.classList.add("analytics__value");
    valueElement.style = `width: ${barWidthCoeff * mentions}px`;
    valueElement.textContent = mentions;

    return [dateElement, valueElement];
  }

  render() {
    this._totalNewsElements[0].textContent = this._newsData.totalResults;
    this._container.insertBefore(
      this._graphElement,
      this._container.children[6]
    );
    this._queryElement.textContent = `Вы спросили: "${this._newsData.query}"`;
  }
}

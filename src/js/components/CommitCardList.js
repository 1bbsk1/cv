export default class CommitCardList {
  constructor(cards) {
    this._cards = cards;
  }

  fetchCommits() {
    return this._cards.map((card) => card.cardElement);
  }
}

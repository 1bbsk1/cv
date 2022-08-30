export default class SearchInput {
  constructor(searchInputElement) {
    this._searchInputElement = searchInputElement;
  }
  // validateInput() {
  //   this.searchInputElement.
  // }
  fetchQuery() {
    return this._searchInputElement.value;
  }
}

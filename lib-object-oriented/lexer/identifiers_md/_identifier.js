export default class Identifier {
  constructor(symbol) {
    this.symbol = symbol
  }

  get value() {
    return this.symbol
  }
}

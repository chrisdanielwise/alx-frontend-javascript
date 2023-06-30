import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount);
    this._currency = this.validateCurrency(currency);
  }

  validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected a number, but received ${typeof value}`);
    }
    return value;
  }

  validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Expected an instance of Currency');
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this.validateNumber(value);
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this.validateCurrency(value);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

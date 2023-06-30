import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this.validateNumber(floors);
  }

  validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected a number, but received ${typeof value}`);
    }
    return value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

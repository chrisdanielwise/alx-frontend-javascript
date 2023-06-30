export default class Building {
    constructor(sqft) {
      this._sqft = this.validateNumber(sqft);
    }
  
    validateNumber(value) {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected a number, but received ${typeof value}`);
      }
      return value;
    }
  
    get sqft() {
      return this._sqft;
    }
  
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  
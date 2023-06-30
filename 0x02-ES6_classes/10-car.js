export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    get brand() {
      return this._brand;
    }
  
    get motor() {
      return this._motor;
    }
  
    get color() {
      return this._color;
    }
  
    cloneCar() {
      const clonedCar = Object.create(Object.getPrototypeOf(this));
      Object.getOwnPropertyNames(this).forEach(prop => {
        const descriptor = Object.getOwnPropertyDescriptor(this, prop);
        Object.defineProperty(clonedCar, prop, descriptor);
      });
      return clonedCar;
    }
  }
  
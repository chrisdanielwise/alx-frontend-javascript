export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = this.validateString(name);
      this._length = this.validateNumber(length);
      this._students = this.validateStudents(students);
    }
  
    validateString(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      return value;
    }
  
    validateNumber(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      return value;
    }
  
    validateStudents(value) {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected an array for students');
      }
      value.forEach((student) => {
        if (typeof student !== 'string') {
          throw new TypeError('Expected strings in the students array');
        }
      });
      return value;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = this.validateString(value);
    }
  
    get length() {
      return this._length;
    }
  
    set length(value) {
      this._length = this.validateNumber(value);
    }
  
    get students() {
      return this._students;
    }
  
    set students(value) {
      this._students = this.validateStudents(value);
    }
  }

class Length{
  constructor(ft, inch) {
    this.ft = ft;
    this.inch = inch;
  }
  isValidObject() {
    if (this.ft >= 0 && this.inch >= 0) {
      return true;
    } else {
      return false;
    }
  } 
  addLength(lengthObj) {
    if (this.isValidObject() && lengthObj.isValidObject()) {
      let totalInches = this.inch + lengthObj.inch;
      let carryOverFt = Math.floor(totalInches / 12);
      let remaingIches = totalInches % 12;
      let totalFt = this.ft + carryOverFt + lengthObj.ft;
      return [totalFt, remaingIches];
    }
    else {
      return [0, 0];
    }
  }
}

const length1 = new Length(5, 6);
const length2 = new Length(8, 3);
const sum = length1.addLength(length2);
console.log(sum);
console.log(Math.floor(18 / 12));
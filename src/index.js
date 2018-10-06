class SmartCalculator {
  constructor(initialValue) {
    this.array = [initialValue];
  }

  add(number) {
    this.array.push('+');
    this.array.push(number);
    return this;
  }
  
  subtract(number) {
    this.array.push('-');
    this.array.push(number);
    return this;
  }

  multiply(number) {
    this.array.push('*');
    this.array.push(number);
    return this;
  }

  devide(number) {
    this.array.push('/');
    this.array.push(number);
    return this;
  }

  pow(number) {
    this.array.push('^');
    this.array.push(number);
    return this;
  }

  valueOf() {
    let currentValue = 0;
    for (let index = 0; index < this.array.length; index++) {
      switch (this.array[index]) {
        case '^':
          currentValue = Math.pow(this.array[index-1],this.array[index+1]);
          this.array.splice(index-1,3,currentValue);
          index = 0;          
          break;

        default:
          break;
      }      
    }
    for (let index = 0; index < this.array.length; index++) {
      switch (this.array[index]) {
        case '/':
          currentValue = this.array[index-1]/this.array[index+1];
          this.array.splice(index-1,3,currentValue);
          index = 0;
          break;
        case '*':
          currentValue = this.array[index-1]*this.array[index+1];
          this.array.splice(index-1,3,currentValue);
          index = 0;
          break;  

        default:
          break;
      }
      
    }
    for (let index = 0; index < this.array.length; index++) {
      switch (this.array[index]) {
        case '+':
          currentValue = this.array[index-1]+this.array[index+1];
          this.array.splice(index-1,3,currentValue);
          index = 0;
          break;
        case '-':
          currentValue = this.array[index-1]-this.array[index+1];
          this.array.splice(index-1,3,currentValue);
          index = 0;
          break;
      
        default:
          break;
      }      
    }
    return this.array.shift();
  }
}

module.exports = SmartCalculator;

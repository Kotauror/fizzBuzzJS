function FizzBuzz() {

}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) { //fizzbuzz to instancja klasy. this to jak self.
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
} //this method returns true or false.

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}

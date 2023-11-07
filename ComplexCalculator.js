/* 
Filename: ComplexCalculator.js
Content: A complex number calculator that can perform addition, subtraction, multiplication, and division operations on complex numbers. It supports both Cartesian and Polar representations.
*/

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  static fromCartesian(real, imaginary) {
    return new ComplexNumber(real, imaginary);
  }

  static fromPolar(magnitude, angleInRadians) {
    const real = magnitude * Math.cos(angleInRadians);
    const imaginary = magnitude * Math.sin(angleInRadians);
    return new ComplexNumber(real, imaginary);
  }

  toCartesianString() {
    return `${this.real} + ${this.imaginary}i`;
  }

  toPolarString() {
    const magnitude = Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    const angleInRadians = Math.atan2(this.imaginary, this.real);
    return `${magnitude} ∠ ${angleInRadians} radians`;
  }

  add(complexNumber) {
    const real = this.real + complexNumber.real;
    const imaginary = this.imaginary + complexNumber.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  subtract(complexNumber) {
    const real = this.real - complexNumber.real;
    const imaginary = this.imaginary - complexNumber.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(complexNumber) {
    const real = this.real * complexNumber.real - this.imaginary * complexNumber.imaginary;
    const imaginary = this.real * complexNumber.imaginary + this.imaginary * complexNumber.real;
    return new ComplexNumber(real, imaginary);
  }

  divide(complexNumber) {
    const denominator = complexNumber.real ** 2 + complexNumber.imaginary ** 2;
    const real =
      (this.real * complexNumber.real + this.imaginary * complexNumber.imaginary) / denominator;
    const imaginary =
      (this.imaginary * complexNumber.real - this.real * complexNumber.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }
}

// Usage Example:

// Create complex numbers in Cartesian form
const complex1 = ComplexNumber.fromCartesian(3, 2);
const complex2 = ComplexNumber.fromCartesian(1, -4);

console.log("Complex Number 1 (Cartesian):", complex1.toCartesianString());
console.log("Complex Number 2 (Cartesian):", complex2.toCartesianString());

// Perform operations on complex numbers
const additionResult = complex1.add(complex2);
const subtractionResult = complex1.subtract(complex2);
const multiplicationResult = complex1.multiply(complex2);
const divisionResult = complex1.divide(complex2);

console.log("Addition Result (Cartesian):", additionResult.toCartesianString());
console.log("Subtraction Result (Cartesian):", subtractionResult.toCartesianString());
console.log("Multiplication Result (Cartesian):", multiplicationResult.toCartesianString());
console.log("Division Result (Cartesian):", divisionResult.toCartesianString());

// Convert complex numbers to polar form
console.log("Complex Number 1 (Polar):", complex1.toPolarString());
console.log("Complex Number 2 (Polar):", complex2.toPolarString());
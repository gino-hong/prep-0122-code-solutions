function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  var a = num1 + num2;
  var b = a * 5;
  return b;
}

console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  var a = num1 * num2;
  var b = a / 5;
  return b;
}

console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  var a = num1 - num2;
  return a;
}

console.log('subtractTwoNumbers Exercise:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  var circumference = 2 * radius * Math.PI;
  return circumference;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  var fullName = '"' + firstName + ' ' + lastName + '"';
  return fullName;
}

var jr = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', jr);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube Exercise:', cubeResult);

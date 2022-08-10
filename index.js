// Exercise 01
const euroCountries = ["Germany", "Italy", "England", "Spain"];
const asianCountries = ["Turkey", "Sri Lanka", "Russia", "India"];
const bothCountries = [...euroCountries, ...asianCountries];
console.log(bothCountries);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log("-------------------------------------------");
// Exercise 02
let arr4 = ["a", "b", "c"];
let arr5 = arr4;
arr5.push("d");
console.log(arr5);

// Exercise 03

const numArr = [20, 10, 5, 40, 50, 80, 100];

const maxNum = (arr) => {
  return arr.reduce((a, b) => Math.max(a, b));
};

console.log(maxNum(numArr));

// Exercise 04

const minNum = (arr) => {
  return arr.reduce((a, b) => Math.min(a, b));
};

console.log(minNum(numArr));

// Exercise 05

const person = { name: "John" };
const job = { role: "Teacher" };

// 5.1
const objPersonClone = Object.assign({}, person);
console.log(objPersonClone);

// 5.2
const employee = { ...person, ...job };
console.log(employee);

// 5.3
employee.name = "Lukas";
employee.role = "Driver";

console.log(employee);

// Exercise 06

const isWhole = (val1, val2, val3, val4) => {
  let valAverage = val1 + val2 + val3 + val4 / 4;
  return valAverage % 1 === 0 ? true : false;
};

console.log(isWhole(2, 3, 4, 8));

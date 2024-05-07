// Currying in JS is a functional programming concept 
// where a function with multiple arguments is transformed into a sequence of function each taking a single argument
function myFunc(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// This is normal way both ways are correct but this solution is lengthy...
let res = myFunc(2);
let res2 = res(2);
let res3 = res2(6);
// console.log(res3);
// This is advance method in JavaScript and its called (Currying method) and it is easy to understand the code..
let myres = myFunc(2)(2)(6);
// console.log(myres);

let bioData = {
  name: "ayaad",
  age: 22,
};
function data(obj) {
  return function (value) {
    return obj[value];
  };
}
let getData = data(bioData)
console.log(getData("age"))

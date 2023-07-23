"use strict";

// let hasDriverLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("i can drive:D");

// lecture 2
// function logger() {
//   console.log("My name is Jonas");
// }
// // calling running or inloking the  functions
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = "juice with ${apples} apples and ${oranges} oranges";
//   return juice;
// }
// const applejuice = fruitProcessor(5, 10);
// console.log(applejuice);

// lecture 3
// function declaration
// function calAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// function expression
// const a = calAge1(1991);
// console.log(a);

// lecture 4

// Arrow function

// normal function expression
// const calage1 = function (birthyear) {
//   return 2022 - birthyear;
// };

// // Arrow function
// const calcAge2 = (birthyear) => 2022 - birthyear;
// const age3 = calcAge2(2001);
// console.log(age3);

// const yearofRetirm = (bithyear, firstname) => {
//   const age = 2022 - bithyear;
//   const retirement = 2065 - bithyear;
//   return retirement;
// };

// console.log(yearofRetirm(2045, "lalitpatel"));

// function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applepieces = cutFruitPieces(apples);
//   const orangpieces = cutFruitPieces(oranges);
//   // console.log(apples, oranges);
//   const juice =
//     "juice with " + applepieces + " of apples and " + orangpieces + " oranges";
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// i have to focus on my studies

// const friends = ["micheal", "steven", "peter"];
// friends.push("jay");
// console.log(friends);
// friends.unshift("john");
// console.log(friends);
// friends.pop();
// console.log(friends);
// console.log(friends.indexOf("steven"));
// console.log(friends.includes("steven"));

// objects;

// const jonasArray = [
//   "jonas",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
// ];

// const jonas = {
//   firstname: "jonas",
//   lastname: "schemedtmann",
//   age: 2037 - 1991,
//   birthYeah: 1996,
//   job: "teacher",
//   friends: ["micheal", "peter", "steven"],
//   hasdrivingLicense: true,
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYeah;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](jonas.birthYeah));

// console.log(jonas);
// console.log(jonas.lastname);
// console.log(jonas["lastname"]);

// control structure

// for (let rep = 1; rep <= 10; rep++) {
//   console.log("lifting weights repetition " + rep);
// }
// const jonasArray = [
//   "jonas",
//   "patel",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
// ];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }
// const jonasArray = [
//   "jonas",
//   "patel",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// console.log();
const tempratures = [3, -2, , -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// compute amplitude tempratrues

// whats a sensor error

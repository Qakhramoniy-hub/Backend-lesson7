// // ! Execution Context - bu JavaScript kodini ishga tushirib beruvchi muhit

// // * Execution context 2 turga bo'linadi:
// // Global execution context
// let a = 10;
// console.log(a);

// // Function execution context
// function test() {
//   console.log("hello");
// }

// test(); // Har safar function chaqirilsa, yangi execution context yaratiladi.

// // * Execution context 2 bosqichda ishga tushadi.
// // 1. Creation phase - Execution muhiti yaratiladi, ya'ni o'zgaruvchilar va boshqalar xotirada paydo bo'ladi.
// console.log(b); // a → undefined
// var b = 10;

// // 2. Execution phase - Execution muhitdagi barcha amallar ketma-ketlikda bajariladi.
// var a = 10;
// console.log(a); // 10

// // ! Scope — variable qayerda ishlatilishi mumkinligini bildiradi.

// let a = 10;

// function test() {
//   let b = 20;
// }
// // a → global scope
// // b → function scope

// // ! Closure - bu funksiya tashqi scope dagi o'zgaruvchini eslab qolishi

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();

// fn(); // 1
// fn(); // 2

// // ! Qisqa xulosa

// //* Execution Context:
// // JS kod ishlaydigan muhit

// //* Bosqichlari:
// // 1 Creation phase
// // 2 Execution phase

// //* Closure:
// // funksiya tashqi scope dagi variable ni eslab qoladi

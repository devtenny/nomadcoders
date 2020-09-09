// alert('Im Working. Im JS. Im Beautiful. Im worth it.');
// console.log('Im Working. Im JS. Im Beautiful. Im worth it.');

// let a = 3;
// const b = 5;
// var c = 2;

// 한줄주석
/* 여러줄
주석 */

// // 문자열 String
// const what = "문자열은 큰따옴표 안에";
// // 불리언~ Boolean
// const what= true;
// // 정수 Nunber
// const what = 666;
// // 실수 Float
// const what = 55.1;

// 배열 Array []
// const mon = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
//
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// console.log(daysOfWeek);
// console.log(daysOfWeek[2]);

// 객체 Object {}
// const taetae = {
//   name: "Taetae",
//   age: 23,
//   gender: "Female",
//   isHansome: true,
//   favMovies: ["Begin again", "Notebook"],
//   favFood: [  // 객체의 배열
//     {
//       name: "pizza",
//       fatty: true
//     },
//     {
//       name: "salad",
//       fatty: false
//     }
//   ]
// }
// console.log(taetae.age);
// console.log(taetae.favFood[0]);

// 함수 function
// function sayHello(name, age) {
//   // i = 0
//   // while(i < age) {
//   //   console.log(name, "Hello");
//   //   i++;
//   // }
//
//   return `Hello ${name} you are ${age} years old`;
// }
//
// const hello = sayHello("Taetae", 23);
// console.log(hello);

// const calculator = {
//   plus: function(a, b) {
//     return a + b;
//   }
// }
//
// const plus = calculator.plus(5, 5);
// console.log(plus);

// console.log(document);
// const title = document.querySelector("body h1");
// title.innerHTML = "안뇽~!";
//
// console.dir(document);

// const title = document.querySelector(".title");
// title.innerHTML = "안녕 자바스크립트~";
// title.style.color = "darkgreen";
// document.title = "안농안농";

// function handleResize(event) {
//   console.log(event);
//   console.log("사이즈가 변경되었습니다.");
// }
// window.addEventListener("resize", handleResize);

// function handleClick(event) {
//   title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);

// const age = prompt("몇살이야?");
// console.log(age);

const title = document.querySelector("#title");

const CLIKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLIKED_CLASS);
  // if(!hasClass) {
  //   title.classList.add(CLIKED_CLASS);
  // } else {
  //   title.classList.remove(CLIKED_CLASS);
  // }
  title.classList.toggle(CLIKED_CLASS);
}

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
//
// function handleClick() {
//   const currentColor = title.style.color;
//   if(currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

function init() {
  // title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

// function handleOnline() {
//   console.log("온라인 상태입니다.");
//   alert("온라인 상태입니다.");
// }
//
// function handleOffline() {
//   console.log("오프라인 상태입니다.");
//   alert("오프라인 상태입니다.");
// }
//
// window.addEventListener("online", handleOnline);
// window.addEventListener("offline", handleOffline);

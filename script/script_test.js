'use strict';

const date = new Date();

console.log(date);

// date.setFullYear(1994);
// console.log(date.getTime());
// console.log(date.toTimeString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString('ru'));
// console.log(date.toLocaleTimeString('ru'));
// console.log(date.toISOString().slice(0, 10));
console.log(Date.now());
console.log(Date.parse('1 january 2020'));





// date.setFullYear(1990, 2, 2);
// date.setMonth(0, 16);

// date.setDate(date.getDate() + 100);

// console.log(date);
// console.log('Year', date.getFullYear());
// console.log('Month', date.getMonth() + 1);
// console.log('Date', date.getDate());
// console.log('Week day', date.getDay());
// console.log('Hours', date.getHours());
// console.log('Hours', date.getMinutes());
// console.log('Hours', date.getSeconds());





















// const logo = document.querySelector('.logo'),
//     menu = document.querySelector('.menu'),
//     mediaLeft = document.querySelector('.media phone-media');

// let count = 0;

// let requestAnim;
// let logoMove = function () {
//     requestAnim = requestAnimationFrame(logoMove);
//     count++;

//     if (count < 300) {
//         logo.style.left = count * 3 + 'px';
//         menu.style.top = count + 'px';
//     } else if (count < 600) {
//         logo.style.left = count * 2 + 'px';
//     } else {
//         cancelAnimationFrame(requestAnim);
//     }
// }

// let animate = true;
// document.addEventListener('click', function() {
//     if(animate) {
//         requestAnim = requestAnimationFrame(logoMove);
//         animate = false;
//     } else {
//         cancelAnimationFrame(requestAnim);
//         animate = true;
//     }
// });

// // requestAnim = requestAnimationFrame(logoMove);




















// let logoMove = function () {
//     count++;

//     if(count < 300) {
//         logo.style.left = count * 2 + 'px';
//         menu.style.top = count + 'px';
//     } else if( count < 600) {
//         logo.style.left = count * 2+ 'px';
//     } else {
//         clearInterval(idInterval);
//     }
// }
// let idInterval = setInterval(logoMove, 10);

















// let logoMove = function() {
//     count++;
//     logo.style.left = count * 3 + 'px';
//     menu.style.top = count + 'px';
//     if(count < 300) {
//         setTimeout(logoMove, 5);
//     }
// }
//  setTimeout(logoMove, 500);



















// let getMessage = function(name) {
//     console.log('Hello ' + name + ' !');
// }

// let count = 0;

// let idInterval = setInterval(getMessage, 1500, 'MAX');

// let idSet = setTimeout(getMessage, 5000, 'Edward');

// clearInterval(idSet);


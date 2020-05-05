'use strict';

const logo = document.querySelector('.logo');
const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('menu');
const closeBtn = document.querySelector('.close-btn');

let fly;
let move = -100;
const hidden = () => {
    fly = requestAnimationFrame(hidden);
    move += 5;
    menu.style.transform = `translateX(${move}%)`;

    if (move === 100) {
        cancelAnimationFrame(fly);
    }

};

const handlerMenu = () => {
    if (!menu.style.transform || menu.style.transform === `translateX(-100%)`) {
        hidden();
    } else {
     menu.style.transform = `translateX(-100%)`;
    }


};

btnMenu.addEventListener('click', handlerMenu);
closeBtn.addEventListener('click', handlerMenu);








// let count = 0;
// let fly;
// const start = () => {
//     fly = requestAnimationFrame(start);
//     count++;
//     if (count < 400) {
//         logo.style.left = count + 'px';
//     } else {
//         cancelAnimationFrame(fly);
//     }
// };
// let anim = true;
// document.addEventListener('click', () => {
//     if (anim) {
//         fly = requestAnimationFrame(start);
//         anim = false;
//     } else {
//         cancelAnimationFrame(fly);
//         anim = true;
//     }
// });







// let count = 0;

// const start = () => {
//     count ++;

//     if (count < 400) {
//         logo.style.left = count + 'px';
//     } else {
//         clearInterval(stop);
//     }
//     console.log(count);
// };
// let stop = setInterval(start, 10);







// const start = () => {
//     const inter = setInterval(() => {
//         count++;
//         console.log('I am setinterval');
        
//         if (count > 5) {
//             clearInterval(inter);
//             console.log('I am clearInterval');
//         }
//     }, 500);
// }
// logo.addEventListener('click', start);


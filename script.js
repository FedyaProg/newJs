'use script';

const myLesson = [
    { lesson: 1, status: true },
    { lesson: 2, status: true },
    { lesson: 3, status: false },
    { lesson: 4, status: true },
    { lesson: 5, status: false },
    { lesson: 6, status: true },
    { lesson: 7, status: true },
    { lesson: 8, status: true },
    { lesson: 9, status: true },
    { lesson: 10, status: false }
];

let newArr = [];
// first variant

myLesson.forEach((item) => {
    if(item.status === false) {
        newArr.push(item);
    }
})
console.log(newArr);

// second variant

myLesson.forEach((item) => (item.status) ? 'true value is not need' : newArr.push(item));
console.log(newArr);

// third variant

newArr = myLesson.filter((item) => !item.status);
console.log(newArr);















// const number = [34, 52, 63, 12, -21, 5];

// const names = ['MaxiM', 'Wick', 'toMmY', 'robert', 'USMANOV'];

// const mix = ['Glo', 25, true, 'Academy', '15', -2, null];

// const badNum = [45, 20, 43, -53, 'hi', 81, 95];
// let arr = [[1, 3], [9, 5], [3, 0, 6]];
// let sum = 0;
// let sum2 = 0;

// let newArr = arr.reduce(function(accumlator, item) {
//     return accumlator.concat(item);                     // konkatinatsiyalash
// });

// console.log(newArr);

// let new2 = newArr.reduce((item) => sum2 += item)

// console.log(sum2);













// let result = false;

// for(let i = 0; i < mix.length; i++) {
//     if(typeof mix[i] === 'number') {
//         result = true;
//         break;
//     }
// }
// console.log(result);

// let result2 = mix.some((item) => typeof item === 'number' );
// console.log(result2);

// let result3 = badNum.every((item) => typeof item === 'number');     // .every hamma elementni tekshiradi
// console.log(result3);















// let forWords = [];

// for(let i = 0; i < mix.length; i++) {
//     if(typeof mix[i] === 'string' && isNaN(mix[i])) {
//         forWords.push(mix[i]);
//     }
// }
// console.log(forWords);

// let filterWords = mix.filter((item) => typeof item === 'string' && isNaN(item));
// console.log(filterWords);

// let positiveNum = number.filter((item) => item > 0 );
// console.log(positiveNum);













// for(let i = 0; i < names.length; i ++) {
//     names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLocaleLowerCase();
// }
// console.log(names);

// names.forEach( (item, i, arr) => {
//     arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(names);

// const correctName = names.map((item) => {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// })
// console.log(correctName);
















// for(let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);
// }

// for(let index in mix) {
//     console.log(mix[index]);
// }

// for(let elem of mix) {
//     console.log(elem);
// }

// mix.forEach( (item, index, arr) => {
    // console.log(`${index} ${item}`);
    // console.log({index, item})
// })

// mix.forEach( (item) => console.log(item))


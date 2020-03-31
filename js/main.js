'use strict';

// console.log(confirm('Have you 18 years old')); // true or false   

// let question1 = confirm('Have you 18 yeats old?'); // true, false 
// let question2 = prompt('Are you sure on your desicion', '18'); // input tag ; +prompt... (to turn typeof Number)
// console.log(typeof Number(question2));


// console.log(String(10));
// console.log(typeof (10+''));
// console.log(typeof (10 .toString()));

// console.log(typeof Number('10'));
// console.log(typeof +'10');

// let num = '10';
// num *= 1;
// console.log(typeof num);

// console.log( parseInt('15 px'));
// console.log( parseFloat('234.3 px'))

let n = 'a';
switch(n) {
    case 2:
    case 'a':
    case 3:
        console.log('3')
        break;
    case 4:
        console.log('4');
        break;
    case 5: 
        console.log('5');
        break;
    default:
        console.log('default');

}

let men = 5 ? 'unusual' : 0;
console.log('result', men);







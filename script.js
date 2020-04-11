'use strict';

const books = document.querySelector('.books'),
    book = document.querySelectorAll('.book'),
    li = document.querySelectorAll('li'),
    ul = document.querySelectorAll('ul'),
    adv = document.querySelector('.adv'),
    h2 = document.querySelectorAll('h2'),
    body = document.querySelector('body'),
    titleLink = document.querySelectorAll('a');


body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")'

// ul[0].prepend(li[1]);           // puts element to first turn in the parent tag
// li[1].replaceWith(li[0]);       // exchange elements and delete - li[1]
// li[8].replaceWith('nimanimanimanimnaiNINININ'); // delete li[8] and puts text

adv.remove();                   // delete element 
books.append(book[1]);          // puts element to last turn in the parent tag
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

li[3].after(li[6]);             // puts element after...
li[6].after(li[8]);
li[10].before(li[2]);

li[49].before(li[55]);
li[50].after(li[48]);
li[53].after(li[51]);

const newLi = document.createElement('li');

ul[2].append(newLi);
newLi.textContent = 'Глава 8: За пределами ES';
li[26].before(newLi);

// li[1].textContent = '<h2>MIMIMIMIMIMIMIMIMI</h2>';  // replace element with text
// li[2].innerHTML = '<h2>MIMIMIMIMIMIMIMIMI</h2>';    // replace element with new element

// const newTitle = document.createElement('h2');
// book[4].prepend(newTitle);
// newTitle.textContent = 'MIMIMI'
// newTitle.style.color = '#bdb76b';
// h2[4].replaceWith(newTitle);

// h2[4].insertAdjacentHTML('afterbegin', '<h2>wdsg</h2>');

const newLink = document.createElement('a');

newLink.textContent = 'Книга 3. this и Прототипы объектов';
newLink.href = 'https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes';

titleLink[4].replaceWith(newLink);







'use scripct';

const phone = document.getElementById('phone'),
    myForm = document.getElementById('my_form');


myForm.addEventListener('submit', valid);

const elementsForm = [];

for(const elem of myForm.elements) {
    if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
        elementsForm.push(elem);;
    }
}

console.log(elementsForm);

function valid(event) {
    const patternPhone = /^\d+$/;
    elementsForm.forEach(elem => {
        if (!elem.value) {
            elem.style.border = 'solid red';
            event.preventDefault();
        } else {
            elem.style.border = '';
        }

        if (elem.id === 'phone' && !patternPhone.test(elem.value)) {
            elem.style.border = 'solid red';
            event.preventDefault();
        }
    })
}








// const showlog = function () {
//     this.value = this.value.replace(/\D/g, '');
// };

// phone.addEventListener('keydown', showlog);
// phone.addEventListener('keyup', showlog);
// phone.addEventListener('keypress', showlog);
// phone.addEventListener('input', showlog);




















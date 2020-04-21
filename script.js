'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

function Const() {
    DomElement.apply(this, arguments);    
    
    if(this.selector[0] === '.'){
        let div = document.createElement('div');
        document.body.append(div);
        div.classList.add(this.selector.slice(1));
        div.textContent = this.selector;

        let styleElem = div;
        styleElem.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;

        `;

    } else if(this.selector[0] === '#') {
        let p = document.createElement('p');
        document.body.append(p);
        p.classList.add(this.selector.slice(1));
        p.textContent = this.selector;

        let styleElem = p;
        styleElem.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;

        `;
    }
    
}

let divElem = new Const('.by_using_OOP', '65', '220', 'grey', '22');

let pElem = new Const('#by_using_OOP', '45', '520', 'purple', '22');





























// function Car(countryBuild, options) {
//     this.countryBuild = countryBuild;
//     options = options || {};
//     this.color = options.color;
//     this.transmission = options.transmission;
// }
// Car.prototype.ride = function() {
//     console.log(this.brand, this.model, ' is riding');
// }

// function Audi(countyBuild, options, model, type) {
//     this.brand = 'Audi';
//     Car.apply(this, arguments);
//     this.model = model;
//     this.type = type;
//     // this.countryBuild = 'French'
// }
// Audi.prototype = Object.create(Car.prototype);          // # bir-biriga bog'liq
// Audi.prototype.constructor = Audi;

// let audi_rs7 = new Audi('Germany', {color: 'grey', transmission: 'auto'}, 'RS 7', 'hacback');

// console.log(audi_rs7);

// console.log(Audi instanceof Car);
// console.log(audi_rs7 instanceof Audi);
// console.log(audi_rs7 instanceof Car);                   // # bir-biriga bog'liq

// audi_rs7.ride();

// console.log(audi_rs7 instanceof Object)                 // Just miracle






// function Car (brand, model, options) {
//     this.brand = brand;
//     this.model = model;
//     options = options || {};
//     this.color = options.color;
//     this.transmission = options.transmisson;
// }
// Car.prototype.ride = function() {
//     console.log(this.brand, this.model, ' is riding')
// }

// let car1 = new Car('BMW', 'M5', {color: 'black'});
// let car2 = new Car('Mitsubishi', 'EVO 9', {ABS: 'true', color: 'purple'});

// console.log(car1);
// console.log(car2);
// console.log(Car.prototype.isPrototypeOf(car1));
// console.log(car1 instanceof Car);                   // = Car.isPrototyprOf.car1
// console.log(Car.isPrototypeOf(car2));

// car1.ride();
// car2.ride();






// function Car( model, color) {
//     this.model = model;
//     this.color = color;
// }
// Car.prototype.ride = function () {          // Car func.ga metod qo'shish
//     console.log('ride is new method');
// }
// Car.prototype.color = 'Black';

// let car1 = new Car('Nissan', 'brown');
// console.log(car1);
// console.dir(Car);
// car1.ride();
// let testCar = {
//     model: 'Toyoto'
// }
// console.log(testCar);





// let car = {
//     doors: 4,
//     turbocharging: true,
//     ride: function() {
//         console.log('Car is riding');
//     }
// };

// let newCar = Object.create(car);
// newCar.model = 'Mazda';

// console.log(newCar);
// console.log(newCar.hasOwnProperty('doors'));
// console.log(newCar.hasOwnProperty('model'));        //  true/false
// console.log(car.isPrototypeOf(newCar));             //  true/false


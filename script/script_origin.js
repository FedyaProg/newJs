
class CarWash {
    constructor(brand, model = CarWash.noCarModel(), services = []) {
        this.brand = brand;
        this.model = model;
        this.washed = false;
        this._services = services;          // "_servises" is INCAPSULATION, links to "getters and setter"
        
    }
    static noCarModel() {
        return 'none';
    }
    washReady() {
        CarWash.counter++;
        this.washed = true;
        this.return();
    }
    return() {
        console.log(this.brand, this.model, this.washed);
    }

    get services() {
        return this._services.length > 0 ? 'Addintional services' : 'No anymore services';
    }

    set services(addServices) {
        return this._services.push(addServices);
    }
}

class NewCarConst extends CarWash{
    constructor(brand, model, services, pass = 2) {
        super(brand, model, services);
        this.pass = pass;
    }   

    washReady() {
        super.washReady();
        this.reportOffice();            
    }

    reportOffice() {
        console.log('Yangi class orqali yozilgan Habar!!!');
    }
}

CarWash.counter = 0;

let car1 = new CarWash('BMW', 'M5', ['balon qoraytirish', 'chexolni yuvish']);
let car2 = new NewCarConst('Nissan', 'GTR', ['Yangi spoyler'], 5);
// let car3 = new CarWash('Mitsubishi');

// car1.washReady();
// car2.washReady();

console.log(car1);
console.log(car2);

// console.log(car1.services);          
// console.log(car2.services);



//////////////////////////////////////////////////////////
// function Neww(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// Neww.prototype.washed = function(brand, color) {
//     Neww.apply(this, arguments);
    
// };
// let num = new Neww('Nissan', 'white');
// console.log(num);

























// const car = {
//     brand: 'nissan',
//     model: 'GTR',
//     year: 2019,
//     get fullTitle() {
//         return this.brand + ' ' + this.model;
//     },
//     set fullTitle(value) {
//         this.brand = value;
//     } 
// };
// car.fullTitle = 'Mersedes';
// car.color = 'blue';

// Object.defineProperty(car, 'fullTitle', {
//     set: function (val, age) {
//         this.brand = val;
//         this.age = 1;
//     },
//     get: function() {
//         return this.brand + " " + this.model + ' ' + this.age;
//     }
// });
// // car.fullTitle = 'BMW';

// console.log(car.fullTitle);
// console.log(car);

















// const nissan = {
//     model: 'gtr',
//     year: 2019
// };
// // nissan.color = 'purple';
// // nissan['door'] = 2;

// Object.defineProperty(nissan, 'color', {
//     value: 'blue',
//     writable: false,                // unable to change color;
//     configurable: false,            // unable to delete color;
//     enumerable: false               // invisible for loops
// });
// nissan.color = 'black';
// delete nissan.color;

// for (let key in nissan) {
//     console.log(key, nissan[key])
// }
// console.log(nissan);

























// function one(window, door, wall = 5) {
//     console.log('Window ' + window + ' dveri ' + door + ' ppp ' + wall);
// }
// one(33, 22, 11);

// const two = (win, door, wall = 3) => {
//     console.log(`Uya bor:
//         deraza: ${win}
//         eshik: ${door}
//         wall: ${wall}`);
// }
// two(1, 1, 5);




// let name = 'Andrey',
//     age = 24,
//     last = 'Churkov';
// let newStr = `Salom hurmatli ${name} ${last} sizni ko'rgandan hursandmiz ${age}`;
// console.log(newStr);














// 'use strict';

// const start = document.getElementById('start'),
//     btnPlusIncome = document.getElementsByTagName('button')[0],
//     btnPlusExpenses = document.getElementsByTagName('button')[1],
//     checkboxDeposit = document.querySelector('#deposit-check'),
//     resultValue = document.querySelectorAll('.newForValue'),
//     budgetMonthValue = document.querySelector('.budget_month-value'),
//     budgetDayValue = document.querySelector('.budget_day-value'),
//     expensesMonthValue = document.querySelector('.expenses_month-value'),
//     salaryAmount = document.querySelector('.salary-amount'),
//     incomeTitle = document.querySelector('.income-title'),
//     expensesTitle = document.querySelector('.expenses-items .expenses-title'),
//     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
//     additionalIncomeValue = document.querySelector('.additional_income-value'),
//     targetMonthValue = document.querySelector('.target_month-value');

// let additionalExpensesValue = document.querySelector('.additional_expenses-value'),
//     additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
//     expensesItem = document.querySelectorAll('.expenses-items'),
//     targetAmount = document.querySelector('.target-amount'),
//     periodSelect = document.querySelector('.period-select'),
//     periodAmount = document.querySelector('.period-amount'),
//     incomePeriodValue = document.querySelector('.income_period-value'),
//     incomeItems = document.querySelectorAll('.income-items'),
//     cancel = document.getElementById('cancel');


// //   let  isNumber = function (n) {
// //         return !isNaN(parseFloat(n)) && isFinite(n);
// //     };

// let appData = {
//     income: {},
//     addIncome: [],
//     incomeMonth: 0,
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     budget: 0,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     start: function () {
//         if (salaryAmount.value === '') {
//             start.disabled = true;
//             return;
//         } else {
//             start.disabled = false;
//             cancel.style.display = 'block';
//             start.style.display = 'none';

//             let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
//             inputText.forEach(function (element) {
//                 element.disabled = true;
//             });

//             let btnPlus = document.querySelectorAll('.btn_plus');
//             btnPlus.forEach(function (element) {
//                 element.disabled = true;
//             });

//             let periodSelect = document.querySelector('.period-select');
//             periodSelect.disabled = true;
//         }

//         this.budget = +salaryAmount.value;

//         this.getExpenses();
//         this.getExpensesMonth();
//         this.getIncome();
//         this.getBudget();
//         this.getAddExpenses();
//         this.getAddIncome();
//         this.showResult();
//     },
//     reset: function () {

//         let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');      // SUPER
//         let inputAll = document.querySelectorAll('input:not(.period-select)');              // SUPER

//         inputAll.forEach(function (element) {        // inputAll.forEach(element => {...})
//             element.value = '';
//         });
//         inputText.forEach(function (element) {
//             element.disabled = false;
//         });

//         this.income = {};
//         this.incomeMonth = 0;
//         this.addIncome = [];
//         this.expenses = {};
//         this.addExpenses = [];
//         this.deposit = false;
//         this.percentDeposit = 0;
//         this.moneyDeposit = 0;
//         this.budget = 0;
//         this.budgetDay = 0;
//         this.budgetMonth = 0;
//         this.expensesMonth = 0;

//         periodSelect.value = 1;
//         periodAmount.textContent = 1;
//         periodSelect.disabled = false;
//         start.style.display = 'block';
//         cancel.style.display = 'none';

//         this.addExpensesBlock();
//         this.addIncomeBlock();

//         incomeItems.forEach((element, i) => {
//             if (i !== 0) {
//                 element.remove();
//             }
//         });
//         btnPlusIncome.style.display = 'block';

//         expensesItem.forEach((element, i) => {
//             if (i !== 0) {
//                 element.remove();
//             }
//         });
//         btnPlusExpenses.style.display = 'block';
        
        
//     },
//     showResult: function () {
//         budgetMonthValue.value = this.budgetMonth;
//         budgetDayValue.value = this.budgetDay;
//         expensesMonthValue.value = this.expensesMonth;
//         additionalExpensesValue.value = this.addExpenses.join(', ');
//         additionalIncomeValue.value = this.addIncome.join(', ');
//         targetMonthValue.value = this.getTargetMonth();
//         incomePeriodValue.value = this.calcSavedMoney();

//     },
//     addExpensesBlock: function () {
//         let cloneExpensesItem = expensesItem[0].cloneNode(true);
//         expensesItem[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpenses);
//         expensesItem = document.querySelectorAll('.expenses-items');

//         if (expensesItem.length === 3) {
//             btnPlusExpenses.style.display = 'none';
//         }
//     },
//     addIncomeBlock: function () {
//         let cloneIncomeItems = incomeItems[0].cloneNode(true);
//         incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncome);
//         incomeItems = document.querySelectorAll('.income-items');

//         if (incomeItems.length === 3) {
//             btnPlusIncome.style.display = 'none';
//         }
//     },
//     getExpenses: function () {
//         let _this = this;
//         expensesItem.forEach(function (item) {
//             let itemExpenses = item.querySelector('.expenses-title').value;
//             let cashExpenses = item.querySelector('.expenses-amount').value;
//             if (itemExpenses !== '' && cashExpenses !== '') {
//                 _this.expenses[itemExpenses] = cashExpenses;
//             }
//         });
//     },
//     getIncome: function () {
//         let _this = this;
//         incomeItems.forEach(function (item) {
//             let itemIncome = item.querySelector('.income-title').value;
//             let cashIncome = item.querySelector('.income-amount').value;
//             if (itemIncome !== '' && cashIncome !== '') {
//                 _this.income[itemIncome] = cashIncome;
//             }
//         });

//         for (let key in this.income) {
//             this.incomeMonth += +this.income[key];
//         }
//     },
//     getAddExpenses: function () {
//         let _this = this;
//         let addExpenses = additionalExpensesItem.value.split(',');
//         addExpenses.forEach(function (item) {
//             item = item.trim();
//             if (item !== '') {
//                 _this.addExpenses.push(item);
//             }
//         })
//     },
//     getAddIncome: function () {
//         let _this = this;
//         additionalIncomeItem.forEach(function (item) {
//             let itemValue = item.value.trim();
//             if (itemValue !== '') {
//                 _this.addIncome.push(itemValue);
//             }
//         })
//     },
//     getPeriod: function () {
//         periodAmount.textContent = periodSelect.value;

//     },
//     getExpensesMonth: function () {
//         for (let key in this.expenses) {          // for in appData.expenses
//             this.expensesMonth += +this.expenses[key];
//         }

//     },
//     getBudget: function () {
//         this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth);
//         this.budgetDay = Math.floor(this.budgetMonth / 30);
//     },
//     getTargetMonth: function () {
//         let targetItem = Math.ceil(targetAmount.value / this.budgetMonth);
//         if (targetItem < 0) {
//             return 'Цель не будет достигнута';
//         }
//         return ('Цель будет достигнута за: ' + targetItem);
//     },
//     getStatusIncome: function () {
//         if (this.budgetDay >= 1200) {
//             return ('У вас высокий уровень дохода');
//         } else if (this.budgetDay >= 600) {
//             return ('У вас средний уровень дохода');
//         } else if (this.budgetDay >= 0) {
//             return ('К сожалению у вас уровень дохода ниже среднего');
//         } else {
//             return ('Что то пошло не так');
//         }
//     },
//     getInfoDeposit: function () {
//         if (this.deposit) {
//             this.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
//             while (!isNumber(this.percentDeposit)) {
//                 this.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
//             }
//             this.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
//             while (!isNumber(this.moneyDeposit)) {
//                 this.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
//             }
//         }
//     },
//     calcSavedMoney: function () {
//         return this.budgetMonth * periodSelect.value;
//     }

// };


// start.addEventListener('click', appData.start.bind(appData));
// btnPlusIncome.addEventListener('click', appData.addIncomeBlock.bind(appData));
// btnPlusExpenses.addEventListener('click', appData.addExpensesBlock.bind(appData));
// periodSelect.addEventListener('change', appData.getPeriod.bind(appData));
// cancel.addEventListener('click', appData.reset.bind(appData));
// /////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////

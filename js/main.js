'use strict'

let mission = 50000;
let period = 12;



let money = prompt('Ваш месячный доход');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposite = confirm('Есть ли у вас депозит в банке?');

let expensesTrue = prompt('Введите обязательную статью расходов?');
let expensesFalse = prompt('Введите обязательную статью расходов?');
let peroidTrue = prompt('Во сколько это обойдется?');
let periodFalse = prompt('Во сколько это обойдется?');
let budgetMonth = Math.floor(money/2);
let missionPeriod = Math.round(mission/budgetMonth);
let budgetDay = Math.floor(budgetMonth/30);


console.log(typeof money);
console.log(typeof String(addExpenses.split(', ')));
console.log(typeof deposite);
console.log('Период равен ' + period + ' месяцев ' + '\n' + 'Цель заработать ' + '$' + mission);
console.log(addExpenses.split(', '));
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за: ' + missionPeriod);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}



// _______________________________________________________
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

// console.log(addExpenses.length);



// console.log(budgetDay);





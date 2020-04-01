'use strict'

let money = +prompt('Ваш месячный доход', '8000'),
    income = 'IT center',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000,
    period = 12;

const showTypeOf = function(data) {
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit)
// console.log(typeof String(addExpenses.split(', ')));
console.log(income.length);


let expenses1 = prompt('Введите обязательную статью расходов?', 'oil'),
    expensesCost1 = +prompt('Во сколько это обойдется?', '1000'),
    expenses2 = prompt('Введите обязательную статью расходов?', 'wife'),
    expensesCost2 = +prompt('Во сколько это обойдется?', '900');

let expensesCost = expensesCost1 + expensesCost2,
    budgetMonth = Math.floor(money - expensesCost),
    missionPeriod = Math.round(mission / budgetMonth),
    budgetDay = Math.floor(budgetMonth/30);


console.log('Период равен ' + period + ' месяцев ');
console.log('Цель заработать ' + '$' + mission);
console.log(addExpenses.split(', '));           //I can add .toLowerCase()
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за: ' + missionPeriod + ' месяцев');
console.log('Бюджет на день: ' + budgetDay);

let getBudgetDay = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        console.log('Что то пошло не так');
    }
    
}

console.log(getBudgetDay());

// _______________________________________________________
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

// console.log(addExpenses.length);



// console.log(budgetDay);





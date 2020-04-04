'use strict';

let money,
    income = 'IT center',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000,
    expenses = [],
    expensesAmount,
    budgetDay;


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let start = function() {

    do {
        money = prompt('Ваш месячный доход?');
    } while ( !(isNumber(money)))

};

start();

const showTypeOf = function (data) {
    return typeof data;
}
////////////////////////////////////////////////////////
const getExpensesMonth = function() {
    let sum;
    let a = 0;

    for(let i = 0; i < 2; i ++) {
        expenses[i] = prompt('Введите обязательную статью расходов ? ', 'car');

        sum = +prompt('Во сколько это обойдется?', '1000');
        while( !isNumber(sum) ) {
            sum = prompt('Во сколько это обойдется ?');
        }
        a += +sum;
    }
    return a;
};

expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function() {
    return money - expensesAmount;
};

const getTargetMonth = function() {
    let testSum = Math.round(mission / getAccumulatedMonth());
    if(testSum < 0) {
        return 'Цель не будет достигнута';
    }
    return ('Цель будет достигнута за: ' + testSum);
};

budgetDay = Math.floor(getAccumulatedMonth() / 30);

const getStatusIncome = function() {
    
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return('Что то пошло не так');
    }

};


console.log('money', showTypeOf(money));
console.log('income', showTypeOf(income));
console.log('deposite', showTypeOf(deposit));
console.log('Сумма обязательных расходов: ' + expensesAmount);
console.log(addExpenses.toLowerCase().split(', ')); 
console.log(expenses);
console.log(getTargetMonth());
console.log('Бюджет за день: ' + budgetDay);
console.log(getStatusIncome());



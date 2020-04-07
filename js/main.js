'use strict';

let money,
    isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    start = function () {

        do {
            money = prompt('Ваш месячный доход?');
        } while (!(isNumber(money)))

    };

let expensesAmount,
    budgetDay;

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 6,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        
    },
    getExpensesMonth: function() {
        let sum;
        let a = 0;
        for (let i = 0; i < 2; i++) {
            appData.expenses[i] = prompt('Введите обязательную статью расходов ? ', 'OIL');

            sum = +prompt('Во сколько это обойдется?', '500');
            while (!isNumber(sum)) {
                sum = prompt('Во сколько это обойдется ?');
            }
            a += +sum;
        }
        return a;
        // return appData.asking();
    },
    getAccumulatedMonth: function() {
        return money - expensesAmount;
    },
    getTargetMonth: function() {
        let testSum = Math.round(appData.mission / appData.getAccumulatedMonth());
        if (testSum < 0) {
            return 'Цель не будет достигнута';
        }
        return ('Цель будет достигнута за: ' + testSum);
    },
    getStatusIncome: function() {
        if (budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }

}


/////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////


expensesAmount = appData.getExpensesMonth();

budgetDay = Math.floor(appData.getAccumulatedMonth() / 30);


console.log(money);
console.log('Сумма обязательных расходов: ' + expensesAmount);
console.log('expenses: ' + appData.expenses);
console.log(appData.getTargetMonth());
console.log('Бюджет за день: ' + budgetDay);
console.log(appData.getStatusIncome());


// const showTypeOf = function (data) {
//     return typeof data;
// }
// console.log('money', showTypeOf(money));
// console.log('income', showTypeOf(income));
// console.log('deposite', showTypeOf(deposit));

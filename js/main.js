'use strict';

let money,
    isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    start = function () {

        do {
            money = +prompt('Ваш месячный доход?');
        } while (!(isNumber(money)))

    };


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
    asking: function () {
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expensesItem = prompt('Введите обязательную статью расходов ? ', 'OIL');
            let cost;
            do {
                cost = prompt('Во сколько это обойдется ?');
            }
            while (!isNumber(cost));
            appData.expenses[expensesItem] = cost;

        }

    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {          // for in appData.expenses
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function() {
        // appData.budgetMonth,
        // appData.budgetDay, 
        appData.budgetMonth = Math.floor(money - appData.expensesMonth);
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        let targetItem = Math.floor(appData.mission / appData.budgetMonth);
        if (targetItem < 0) {
            return 'Цель не будет достигнута';
        }
        return ('Цель будет достигнута за: ' + targetItem);
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }

}


/////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();





console.log(money);
console.log('Сумма обязательных расходов: ' + appData.expensesMonth);
console.log(JSON.stringify(appData.expenses))
console.log(appData.getTargetMonth());
console.log('Бюджет за день: ' + appData.budgetDay);
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
    console.log(key + ' = ' + appData[key]);
}


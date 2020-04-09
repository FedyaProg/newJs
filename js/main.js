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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 6,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        
        if (confirm('Есть ли у вас есть дополнительный источник заработка ?')) {
            
            let itemIncome = prompt('Пишите тип дохода: ', 'IT Center'),
                cashIncome;
            while(typeof itemIncome === String || !isNaN(itemIncome)) {
                itemIncome = prompt('Пишите тип дохода: ', 'IT Center');
            }
            
            do {
                cashIncome = prompt('Cумма дополнительного заработка', 1000);
            } while (!isNumber(cashIncome))
            
            appData.income[itemIncome] = cashIncome;
        }

        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses.toLowerCase().split(', ');
        // appData.addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
           
            let expensesItem = prompt('Введите обязательную статью расходов ? ', 'OIL');
            while(expensesItem === String || !isNaN(expensesItem)) {
                expensesItem = prompt('Введите обязательную статью расходов ? ', 'OIL');
            }
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
        appData.budgetMonth = Math.floor(appData.budget - appData.expensesMonth);
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
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            appData.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            while(!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            }
            appData.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            while(!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            }
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }

}


/////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();


console.log('this one: ', appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney())

console.log(money);
console.log('Сумма обязательных расходов: ' + appData.expensesMonth);
console.log(JSON.stringify(appData.expenses))
console.log('Возможные расходы: ', appData.addExpenses)
console.log(appData.getTargetMonth());
console.log('Бюджет за день: ' + appData.budgetDay);
console.log(appData.getStatusIncome());

// other way to display addExpenses 
let newStr = appData.addExpenses;
console.log(newStr.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);

// console.log('Наша программа включает в себя данные: ');
// for (const key in appData) {
//     console.log(key + ' = ' + appData[key]);
// }


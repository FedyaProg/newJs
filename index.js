'use strict';

const start = document.getElementById('start'),
    btnPlusIncome = document.getElementsByTagName('button')[0],
    btnPlusExpenses = document.getElementsByTagName('button')[1],
    checkboxDeposit = document.querySelector('#deposit-check'),
    resultValue = document.querySelectorAll('.newForValue'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-items .expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    targetMonthValue = document.querySelector('.target_month-value');

let additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesItem = document.querySelectorAll('.expenses-items'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    incomeItems = document.querySelectorAll('.income-items'),
    cancel = document.getElementById('cancel');

    
//   let  isNumber = function (n) {
//         return !isNaN(parseFloat(n)) && isFinite(n);
//     };

let appData = {
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function () {
        if (salaryAmount.value === '') {
            start.disabled = true;
            return;
        } else {
            start.disabled = false;
            cancel.style.display = 'block';
            start.style.display = 'none';

            let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
            inputText.forEach(function(element) {
                element.disabled = true;     
            });

            let btnPlus = document.querySelectorAll('.btn_plus');
            btnPlus.forEach(function(element) {
                element.disabled = true;
            });

            let periodSelect = document.querySelector('.period-select');
            periodSelect.disabled = true;
        }
        
        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getIncome();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();
    },
    reset: function() {

        let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');      // SUPER
        let inputAll = document.querySelectorAll('input:not(.period-select)');              // SUPER

        inputAll.forEach(function(element) {        // inputAll.forEach(element => {...})
            element.value = '';
        });
        inputText.forEach(function(element) {
            element.disabled = false;
        });
        
        appData.income = {};
        appData.incomeMonth = 0;
        appData.addIncome = [];
        appData.expenses = {};
        appData.addExpenses = [];
        appData.deposit = false;
        appData.percentDeposit = 0;
        appData.moneyDeposit = 0;
        appData.budget = 0;
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.expensesMonth = 0;

        periodSelect.value = 1;
        start.style.display = 'block';
        cancel.style.display = 'none';

        incomeItems.forEach((element, i) => {
            if (i !== 0) {
                element.remove();
            }
        });
        btnPlusIncome.style.display = 'block';

        expensesItem.forEach((element, i) => {
            if (i !== 0) {
                element.remove();
            }
        });
        btnPlusExpenses.style.display = 'block';
    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcSavedMoney();

    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpenses);
        expensesItem = document.querySelectorAll('.expenses-items');

        if(expensesItem.length === 3) {
            btnPlusExpenses.style.display = 'none';
        }
    },
    addIncomeBlock: function() {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncome);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3) {
            btnPlusIncome.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItem.forEach( function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if( itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        }); 
    },
    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if(item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if( itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },
    getPeriod: function () {
        periodAmount.textContent = periodSelect.value;

    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {          // for in appData.expenses
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function () {
        appData.budgetMonth = Math.floor(appData.budget + appData.incomeMonth - appData.expensesMonth);
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        let targetItem = Math.ceil(targetAmount.value / appData.budgetMonth);
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
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            }
            appData.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            }
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * periodSelect.value;
    }

};


start.addEventListener('click', appData.start);
btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
btnPlusExpenses.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('change', appData.getPeriod);
cancel.addEventListener('click', appData.reset);
/////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////

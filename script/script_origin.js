
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
            inputText.forEach(function (element) {
                element.disabled = true;
            });

            let btnPlus = document.querySelectorAll('.btn_plus');
            btnPlus.forEach(function (element) {
                element.disabled = true;
            });

            let periodSelect = document.querySelector('.period-select');
            periodSelect.disabled = true;
        }

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getExpensesMonth();
        this.getIncome();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        this.showResult();
    },
    reset: function () {

        let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');      // SUPER
        let inputAll = document.querySelectorAll('input:not(.period-select)');              // SUPER

        inputAll.forEach(function (element) {        // inputAll.forEach(element => {...})
            element.value = '';
        });
        inputText.forEach(function (element) {
            element.disabled = false;
        });

        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;

        periodSelect.value = 1;
        periodAmount.textContent = 1;
        periodSelect.disabled = false;
        start.style.display = 'block';
        cancel.style.display = 'none';

        this.addExpensesBlock();
        this.addIncomeBlock();

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
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();

    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpenses);
        expensesItem = document.querySelectorAll('.expenses-items');

        if (expensesItem.length === 3) {
            btnPlusExpenses.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncome);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            btnPlusIncome.style.display = 'none';
        }
    },
    getExpenses: function () {
        let _this = this;
        expensesItem.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function () {
        let _this = this;
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = cashIncome;
            }
        });

        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    getAddExpenses: function () {
        let _this = this;
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                _this.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function () {
        let _this = this;
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                _this.addIncome.push(itemValue);
            }
        })
    },
    getPeriod: function () {
        periodAmount.textContent = periodSelect.value;

    },
    getExpensesMonth: function () {
        for (let key in this.expenses) {          // for in appData.expenses
            this.expensesMonth += +this.expenses[key];
        }

    },
    getBudget: function () {
        this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth);
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function () {
        let targetItem = Math.ceil(targetAmount.value / this.budgetMonth);
        if (targetItem < 0) {
            return 'Цель не будет достигнута';
        }
        return ('Цель будет достигнута за: ' + targetItem);
    },
    getStatusIncome: function () {
        if (this.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function () {
        if (this.deposit) {
            this.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            while (!isNumber(this.percentDeposit)) {
                this.percentDeposit = prompt('Напишите годовой процент вашего депозита? ', '10');
            }
            this.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            while (!isNumber(this.moneyDeposit)) {
                this.moneyDeposit = prompt('Напишите сумма депозита ?', 1000);
            }
        }
    },
    calcSavedMoney: function () {
        return this.budgetMonth * periodSelect.value;
    }

};


start.addEventListener('click', appData.start.bind(appData));
btnPlusIncome.addEventListener('click', appData.addIncomeBlock.bind(appData));
btnPlusExpenses.addEventListener('click', appData.addExpensesBlock.bind(appData));
periodSelect.addEventListener('change', appData.getPeriod.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));
/////// //////// ///////// //////// //////////  //////////////  ///////   ///////////   /////////   //////

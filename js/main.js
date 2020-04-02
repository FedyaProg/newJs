'use strict';

let money = +prompt('Ваш месячный доход', '8000'),
    income = 'IT center',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000;


const showTypeOf = function (data) {
    console.log(data, typeof (data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?', 'oil'),
    expensesCost1 = +prompt('Во сколько это обойдется?', '1000'),
    expenses2 = prompt('Введите обязательную статью расходов?', 'wife'),
    expensesCost2 = +prompt('Во сколько это обойдется?', '900');


const getExpensesMonth = function(a, b) {
    return expensesCost1 + expensesCost2;
};
let valExpenses = getExpensesMonth();

const getAccumulatedMonth = function(a, b) {
    return money - valExpenses;
};
let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(a, b) {
    return Math.round(mission / accumulatedMonth);
};

let budgetDay = Math.floor(accumulatedMonth / 30);

const getStatusIncome = function() {
    console.log('на счет этой Function ничего не сказано на задание');
};

console.log(getExpensesMonth());
console.log(addExpenses.split(', ')); // console.log(String(addExpenses.split(', '))); I can add .toLowerCase()
console.log(getTargetMonth());
console.log(budgetDay);
getStatusIncome();


//_________________________________________________________
// let getBudgetDay = function() {
//     if (budgetDay >= 1200) {
//         return ('У вас высокий уровень дохода');
//     } else if (budgetDay >= 600) {
//         return ('У вас средний уровень дохода');
//     } else if (budgetDay >= 0) {
//         return ('К сожалению у вас уровень дохода ниже среднего');
//     } else {
//         console.log('Что то пошло не так');
//     }
    
// }






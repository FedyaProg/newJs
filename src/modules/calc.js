const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        calcValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value,
            squeareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squeareValue) {
            total = price * typeValue * squeareValue * countValue * dayValue;
        }

        calcValue.textContent = total;
    };


    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-count') || target.matches('.calc-day')) {

            countSum();
        }
    });

};


export default calc;

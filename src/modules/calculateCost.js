const calculateCost = () => {
    const calculate = document.getElementById('calc');
    calculate.addEventListener('keydown', event => {

        const target = event.target;

        if (/[^\d]/g.test(target.value) ||
            target.type !== 'number' ||
            event.keyCode > 100 ||
            event.keyCode === 69) {
            event.preventDefault();
        }

    });
};



export default calculateCost;

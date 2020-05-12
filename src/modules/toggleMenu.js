const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    let fly;
    let move = -100;
    const hidden = () => {
        if (document.documentElement.clientWidth < 768) {
            menu.style.transform = `translateX(${0})`;
            return;
        } else {
            fly = requestAnimationFrame(hidden);
            move += 4;
            menu.style.transform = `translateX(${move}%)`;

            if (move === 0) {
                cancelAnimationFrame(fly);
                move = -100;
            }
        }

    };

    const handlerMenu = event => {

        const target = event.target;

        if (!menu.style.transform || menu.style.transform === `translateX(-100%)`) {
            hidden();
        } else if (menu.style.transform) {
            menu.style.transform = `translateX(-100%)`;
        } else if (target.tagName !== 'MENU' && target.closest('menu')) {
            menu.style.transform = `translateX(-100%)`;
        }

    };

    menuItems.forEach(item => {
        item.addEventListener('click', handlerMenu);
    });
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

};



export default toggleMenu;

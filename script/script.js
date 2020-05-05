/* eslint-disable strict */

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            // console.log(seconds);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

        }

        function correctFormate(data) {
            if (data < 10) {
                data = '0' + data;
            }
            return data;
        }

        setInterval(() => {
            const timer = getTimeRemaining();

            timerHours.textContent = correctFormate(timer.hours);
            timerMinutes.textContent = correctFormate(timer.minutes);
            timerSeconds.textContent = correctFormate(timer.seconds);

            if (timer.seconds < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

            // if (timer.timeRemaining > 0) {
            //     setInterval(updateClock, 1000);
            // }
        }, 1000);

    }
    countTimer('1 may 2020');

    // Menu
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

        const handlerMenu = (event) => {

            let target = event.target;

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
    toggleMenu();

    // PopUp
    const toggelePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

        popUpBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
            });
        });

        popUp.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });

    };
    toggelePopUp();

    // Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

});











// eslint-disable-next-line max-len
// closest('') class, id va teg ni faqat ota elementlardan qiridari va html document gacha ko'tarildi, agar topolmasa "null" qaytaradi!

// while (target !== tabHeader) {   // "while" orqali "span" ga clickni ishlatish

// target = target.parentNode;  } // while ni sharti "parentNode" bilan amalga oshiriladi













// // window.addEventListener('DOMContentLoaded', () => {
// //     'use strict';

// //     // Timer
// //     function countTimer(deadline) {
// //         let timerHours = document.querySelector('#timer-hours'),
// //             timerMinutes = document.querySelector('#timer-minutes'),
// //             timerSeconds = document.querySelector('#timer-seconds'),
// //             dateStop = new Date(deadline).getTime(),
// //             dateNow = new Date().getTime(),
// //             timeRemaining = (dateStop - dateNow) / 1000,
// //             seconds = Math.floor(timeRemaining % 60),
// //             minutes = Math.floor((timeRemaining / 60) % 60),
// //             hours = Math.floor(timeRemaining / 60 / 60);

// //             // days = Math.floor(timeRemaining / 60 / 60 / 24);

// //             timerHours.textContent = hours;
// //             timerMinutes.textContent = minutes;
// //             timerSeconds.textContent = seconds;

// //     }
// //     // countTimer('1 may 2020');
// //     setInterval(countTimer, 1000, '1 may 2020');

// // });

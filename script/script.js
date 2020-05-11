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

    // Slider
    const slider = () => {

        const slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            dotBlock = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval,
            newDot = 0;

        slide.forEach((item, index) => {
            newDot = document.createElement('li');
            newDot.classList.add('dot');
            dotBlock.append(newDot);
            if (index === 0) {
                newDot.classList.add('dot-active');
            }
        });
        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.dot, .portfolio-btn')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (target === elem) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
                startSlide();
            }
        });

        startSlide(1500);

    };
    slider();

    // Command
    const command = () => {

        const img = document.querySelectorAll('.command__photo'),
            command = document.getElementById('command');
        let newPhoto;

        command.addEventListener('mouseover', event => {
            const target = event.target;

            if (target.matches('.command__photo')) {
                img.forEach(item => {
                    if (target === item) {
                        newPhoto = item.src;
                        item.src = target.dataset.img;
                        // event.target.src = e.t.dataset.img;
                    }
                });
            }
        });

        command.addEventListener('mouseout', event => {
            const target = event.target;

            if (target.matches('.command__photo')) {
                img.forEach(item => {
                    if (target === item) {
                        item.src = newPhoto;
                    }
                });
            }
        });

    };
    command();

    // Calculate cost
    const calculateCost = () => {
        const calculate = document.getElementById('calc');
        calculate.addEventListener('keydown', event => {

            const target = event.target;

            if (/[^\d]/g.test(target.value) ||
                target.type !== 'number' ||
                event.keyCode > 100 ||
                event.keyCode === 69) { event.preventDefault(); }

        });
    };
    calculateCost();

    // Calculator
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
    calc(100);

    // Send-ajax-form
    const sendForm = () => {

        const errorMessage = 'Something gone wrong!',
            loadMessage = 'Loading...',
            successMessage = 'Thanks, We will contact you!';

        const forms = document.querySelectorAll('form');
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'multipart/json');

            request.send(JSON.stringify(body));
        };

        forms.forEach(form => {
            form.addEventListener('input', event => {
                const target = event.target;
                if (target.name === 'user_phone') {
                    target.value = target.value.replace(/[^\+\d]/g, '');
                }
                if (target.name === 'user_name' || target.name === 'user_message') {
                    target.value = target.value.replace(/[^а-я ]/gi, '');
                }
            });

            form.addEventListener('submit', event => {
                event.preventDefault();
                form.append(statusMessage);
                statusMessage.style.cssText = `font-size: 2rem; color: white; `;
                const formData = new FormData(form);
                statusMessage.textContent = loadMessage;

                const body = {};
                for (const val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                const outputData = () => {
                    statusMessage.style.cssText = `font-size: 2rem; color: green; `;
                    statusMessage.textContent = successMessage;
                    form.reset();
                };

                const error = () => {
                    statusMessage.style.cssText = `font-size: 2rem; color: red; `;
                    statusMessage.textContent = errorMessage;
                };


                postData(body)
                    .then(outputData)
                    .catch(error);
            });
        });
    };
    sendForm();

});


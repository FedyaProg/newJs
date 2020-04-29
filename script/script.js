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
            return { timeRemaining, hours, minutes, seconds };

        }

        function updateClock() {
            const timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            // if (timer.seconds < 10) {
            //     timerSeconds.textContent = '0' + timer.seconds;
            // }
            // console.log(timer.seconds);


            if (timer.seconds < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }
        }
        updateClock();
    }
    countTimer('1 may 2020');

});


























// window.addEventListener('DOMContentLoaded', () => {
//     'use strict';

//     // Timer
//     function countTimer(deadline) {
//         let timerHours = document.querySelector('#timer-hours'),
//             timerMinutes = document.querySelector('#timer-minutes'),
//             timerSeconds = document.querySelector('#timer-seconds'),
//             dateStop = new Date(deadline).getTime(),
//             dateNow = new Date().getTime(),
//             timeRemaining = (dateStop - dateNow) / 1000,
//             seconds = Math.floor(timeRemaining % 60),
//             minutes = Math.floor((timeRemaining / 60) % 60),
//             hours = Math.floor(timeRemaining / 60 / 60);

//             // days = Math.floor(timeRemaining / 60 / 60 / 24);

//             timerHours.textContent = hours;
//             timerMinutes.textContent = minutes;
//             timerSeconds.textContent = seconds;

//     }
//     // countTimer('1 may 2020');
//     setInterval(countTimer, 1000, '1 may 2020');

// });








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








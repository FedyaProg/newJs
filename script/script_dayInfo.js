/* eslint-disable strict */

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const body = document.querySelector('body'),
        date = new Date(),
        weekDay = date.getDay(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    let messageDayTime,
        messageDay;

    if (hours > 19 || hours < 5) {
        messageDayTime = 'Добрый ночь';
    } else if (hours > 12) {
        messageDayTime = 'Добрый вечер';
    } else {
        messageDayTime = 'Добрый день';
    }

    messageDay = new Array();
    messageDay[0] = "Воскресенье";
    messageDay[1] = "Понедельник";
    messageDay[2] = "Вторник";
    messageDay[3] = "Среда";
    messageDay[4] = "Четверг";
    messageDay[5] = "Пятница";
    messageDay[6] = "Суббота";

    function time(item) {
        if (item < 10) {
            item = '0' + item;
        }
        return item;
    }

    const dateStop = new Date('01, 01, 2021').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        periodDay = Math.floor(timeRemaining / 60 / 60 / 24);

    const dayInfo = document.createElement('h2'),
        dayTimeInfo = document.createElement('h3'),
        dayTime = document.createElement('h3'),
        oclock = document.createElement('h3'),
        newYear = document.createElement('h3');

    body.append(dayInfo);
    body.append(dayTimeInfo);
    body.append(dayTime);
    body.append(oclock);
    body.append(newYear);

    dayInfo.textContent = date;
    dayTimeInfo.textContent = messageDayTime;
    dayTime.textContent = `Сегодня ${messageDay[weekDay]}`;
    oclock.textContent = `Текущее время ${time(hours)}:${time(minutes)}:${time(seconds)} PM`;
    newYear.textContent = periodDay;


    

});

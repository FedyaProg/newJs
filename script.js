'use strict';

class First {
    hello(){
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {

    getHello() {
        super.hello();
        setTimeout(() => {
            console.log('А я наследуемый метод!');
        }, 1000);
    }
}

const test = new Second();

test.getHello();

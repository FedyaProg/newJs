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


export default slider;

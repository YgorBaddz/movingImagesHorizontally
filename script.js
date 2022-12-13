const firstBtn = document.querySelector('.first-button'),
secondBtn = document.querySelector('.second-button'),
mainSlide = document.querySelector('.main-slide'),
container = document.querySelector('.container'),
slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

firstBtn.addEventListener('click', () => {
    moveSlide('first');
});

secondBtn.addEventListener('click', () => {
    moveSlide('second');
});

function moveSlide(direction) {
    if(direction === 'second') {
        activeSlideIndex++;

        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'first') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}
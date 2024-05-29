// 슬라이드
document.addEventListener('DOMContentLoaded', function () {
    const slideWrap = document.querySelector('.slide-wrap');
    //console.log('slideWrap', slideWrap);
    const slideBox = document.querySelector('.slide-box');
    //console.log('slideBox', slideBox);
    const slideList = document.querySelectorAll('.slide-list');
    //console.log('slideList', slideList);
    const slidePrevButton = document.querySelector('.slide-prev-button');
    //console.log('slidePrevButton', slidePrevButton);
    const slideNextButton = document.querySelector('.slide-next-button');
    //console.log('slideNextButton', slideNextButton);
    const slidePageButton = document.querySelectorAll('.slide-page-button');
    //console.log('slidePageButton', slidePageButton);
    const slideWidth = slideBox.getBoundingClientRect().width;
    //console.log('slideWidth', slideWidth);
    const slideLength = slideList.length;
    //console.log('slideLength', slideLength);
    let currentSlideIndex = 0;
    //let auto = setInterval(autoSlide,4000);
    let dragStartX = 0;
    let dragEndX = 0;
    let dragStartY = 0;
    let dragEndY = 0;
    let dragLength = 0;

    slideWrap.addEventListener('dragstart', (e) => {
        dragStartX = e.pageX;
        console.log('dragStartX', dragStartX);
        dragStartY = e.pageY;
        console.log('dragStartY', dragStartY);
    });

    slideWrap.addEventListener('dragend', (e) => {
        dragEndX = e.pageX;
        console.log('dragEndX', dragEndX);
        dragEndY = e.pageY;
        console.log('dragEndY', dragEndY);
        dragLength = dragEndX - dragStartX;
        slideBox.style.transition = '0.4s';

        if(dragLength >= 100){
            prevSlide();
        } else if(dragLength <= -100) {
            nextSlide();
        } else {
            slideBox.style.transform = `translateX(0px)`;
        }
        console.log('dragLength', dragLength);
    });

    slideWrap.addEventListener('drag', (e) => {
        dragX = e.pageX;
        console.log('dragX', dragX);
        dragY = e.pageY;
        console.log('dragY', dragY);
        dragLength = dragX - dragStartX;

        slideBox.style.transition = 'none';
        slideBox.style.transform = `translateX(${dragLength}px)`;
        console.log('dragLength', dragLength);
    });

    function prevSlide(){
        currentSlideIndex--;
        slideBox.style.transform = `translateX(${slideWidth * -currentSlideIndex}px)`;
    }

    function nextSlide(){
        currentSlideIndex++;
        slideBox.style.transform = `translateX(${slideWidth * -currentSlideIndex}px)`;
    }

    slidePrevButton.addEventListener('click', function(){
        prevSlide();

        slidePageButton.forEach(function(button) {
            button.classList.remove('active');
        });

        if (currentSlideIndex < 0){
            currentSlideIndex = (slideLength - 1);
            console.log(currentSlideIndex);
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
            slidePageButton[currentSlideIndex].classList.add('active');
        } else {
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
            slidePageButton[currentSlideIndex].classList.add('active');
        }
    });

    slideNextButton.addEventListener('click', function(){
        nextSlide();

        slidePageButton.forEach(function(button) {
            button.classList.remove('active');
        });

        if (currentSlideIndex == slideLength){
            currentSlideIndex = 0;
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
            slidePageButton[currentSlideIndex].classList.add('active');
        } else {
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
            slidePageButton[currentSlideIndex].classList.add('active');
        }
    });

    function autoSlide(){
        if (currentSlideIndex == (slideLength - 1)){
            currentSlideIndex = 0;
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
        } else {
            currentSlideIndex = currentSlideIndex + 1;
            slideBox.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
        }

        slidePageButton.forEach(function(button) {
            button.classList.remove('active');
        });

        slidePageButton[currentSlideIndex].classList.add('active');
        //console.log('currentSlideIndex', currentSlideIndex);
    }


    slidePageButton.forEach(function(button, index) {
        button.addEventListener('click', function(){
            slideBox.style.transform = `translateX(-${slideWidth * index}px)`;
            console.log('button', button);
            slidePageButton.forEach(function(button) {
                button.classList.remove('active');
            });
            slidePageButton[index].classList.add('active');
            currentSlideIndex = index;
            clearInterval(autoSlide);
            auto = setInterval(autoSlide, 4000);
            //console.log(index);
        });
    });
});

// 모달 창
document.querySelector('.modal-overlay').addEventListener('click', function(){
    document.querySelector('.modal-overlay').classList.remove('active');
})

function modalWindowOpen(skill){
    const modalWindow = document.querySelector('.modal-window-wrap[data-modal]="'+skill+'"')
    document.querySelector('.modal-overlay').classList.add('active');
    modalWindow.classList.add('active')
    console.log(skill);
}
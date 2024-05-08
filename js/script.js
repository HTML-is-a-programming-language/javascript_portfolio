// banner slider
document.addEventListener('DOMContentLoaded', function () {
    const slideBox = document.querySelector('.slide-box');
    //console.log('slideBox', slideBox);
    const slideList = document.querySelectorAll('.slide-list');
    //console.log('slideList', slideList);
    const slidePrevButton = document.querySelector('.slide-prev-button');
    //console.log('slidePrevButton', slidePrevButton);
    const slidePageButton = document.querySelectorAll('.slide-page-button');
    //console.log('slidePageButton', slidePageButton);
    const slideWidth = slideBox.getBoundingClientRect().width;
    //console.log('slideWidth', slideWidth);
    const slideLength = slideList.length;
    //console.log('slideLength', slideLength);
    let currentSlideIndex = 0;
    let auto = setInterval(autoSlide,4000);

    function prevSlide(){
        currentSlideIndex--;
        slideBox.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
    }

    slidePrevButton.addEventListener('click', function(){
        prevSlide();
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
            clearInterval(auto);
            auto = setInterval(autoSlide, 4000);
            //console.log(index);
        });
    });
});
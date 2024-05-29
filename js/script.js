// 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const slideWrap = document.querySelectorAll('.slide-wrap');

    slideWrap.forEach((slider) => {
        const slideBox = slider.querySelector('.slide-box');
        const slideList = slider.querySelectorAll('.slide-list');
        const slidePrevButton = slider.querySelector('.slide-prev-button');
        const slideNextButton = slider.querySelector('.slide-next-button');
        const slidePageButtonBox = slider.querySelector('.slide-page-button-box');

        let currentIndex = 0;
        let startX = 0;
        let isDragging = false;
        let animationDuration = 500;
        const totalSlides = slideList.length;

        function createPagination() {
            for (let i = 0; i < totalSlides; i++) {
                const slidePageButton = document.createElement('button');
                slidePageButton.classList.add('slide-page-button');
                slidePageButton.textContent = i + 1;
                slidePageButton.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlidePosition();
                });
                slidePageButtonBox.appendChild(slidePageButton);
            }
        }

        function updatePagination() {
            const slidePageButtons = slidePageButtonBox.querySelectorAll('.slide-page-button');
            slidePageButtons.forEach((slidePageButton, index) => {
                slidePageButton.classList.toggle('active', index === currentIndex);
            });
        }

        function updateSlidePosition() {
            if (!isDragging) {
                slideBox.style.transitionDuration = `${animationDuration}ms`;
                slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;
                updatePagination();
            }
        }

        function showPrevSlide() {
            if (!isDragging) {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlidePosition();
            }
        }

        function showNextSlide() {
            if (!isDragging) {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlidePosition();
            }
        }

        function handleTouchStart(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            slideBox.style.transitionDuration = '0ms';
        }

        function handleTouchMove(e) {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            slideBox.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diff}px))`;
        }

        function handleTouchEnd(e) {
            isDragging = false;
            const diff = e.changedTouches[0].clientX - startX;
            if (diff > 50) {
                showPrevSlide();
            } else if (diff < -50) {
                showNextSlide();
            } else {
                updateSlidePosition();
            }
        }

        slidePrevButton.addEventListener('click', showPrevSlide);
        slideNextButton.addEventListener('click', showNextSlide);
        slideBox.addEventListener('touchstart', handleTouchStart);
        slideBox.addEventListener('touchmove', handleTouchMove);
        slideBox.addEventListener('touchend', handleTouchEnd);

        createPagination();
        updateSlidePosition();

        setInterval(showNextSlide, 3000);
    });
});



// 모달 창
document.querySelector('.modal-overlay').addEventListener('click', function(){
    document.querySelector('.modal-overlay').classList.remove('active');
})

function modalWindowOpen(skill){
    const modalWindow = document.querySelector('.modal-window-wrap[data-modal="'+skill+'"]')
    document.querySelector('.modal-overlay').classList.add('active');
    modalWindow.classList.add('active')
    console.log(skill);
}

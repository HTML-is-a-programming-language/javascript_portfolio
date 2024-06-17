// 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const slideWrap = document.querySelectorAll('.slide-wrap');

    slideWrap.forEach((slider) => {
        const slideBox = slider.querySelector('.slide-box');
        let slideList = slider.querySelectorAll('.slide-list');
        const slidePrevButton = slider.querySelector('.slide-prev-button');
        const slideNextButton = slider.querySelector('.slide-next-button');
        const slidePageButtonBox = slider.querySelector('.slide-page-button-box');

        let currentIndex = 1; // 첫 번째 슬라이드를 복제했으므로 인덱스 1부터 시작
        let startX = 0;
        let isDragging = false;
        let animationDuration = 500;
        const totalSlides = slideList.length;
        let autoSlideInterval;

        // 슬라이드 복제 함수
        function cloneSlides() {
            const firstSlide = slideList[0];
            const lastSlide = slideList[totalSlides - 1];
            const firstSlideClone = firstSlide.cloneNode(true);
            const lastSlideClone = lastSlide.cloneNode(true);

            slideBox.appendChild(firstSlideClone);
            slideBox.insertBefore(lastSlideClone, firstSlide);

            slideList = slider.querySelectorAll('.slide-list'); // 슬라이드 목록 업데이트
        }

        function createPagination() {
            for (let i = 0; i < totalSlides; i++) {
                const slidePageButton = document.createElement('button');
                slidePageButton.classList.add('slide-page-button');
                slidePageButton.textContent = i + 1;
                slidePageButton.addEventListener('click', () => {
                    currentIndex = i + 1; // 복제된 슬라이드로 인해 인덱스 조정
                    updateSlidePosition();
                });
                slidePageButtonBox.appendChild(slidePageButton);
            }
        }

        function updatePagination() {
            const slidePageButtons = slidePageButtonBox.querySelectorAll('.slide-page-button');
            slidePageButtons.forEach((slidePageButton, index) => {
                slidePageButton.classList.toggle('active', index === (currentIndex - 1) % totalSlides);
            });
        }

        function updateSlidePosition() {
            if (!isDragging) {
                slideBox.style.transitionDuration = `${animationDuration}ms`;
                slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;
                updatePagination();
                restartAutoSlide();
            }
        }

        function showPrevSlide() {
            if (!isDragging) {
                currentIndex--;
                slideBox.style.transitionDuration = `${animationDuration}ms`;
                slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;

                if (currentIndex === 0) {
                    setTimeout(() => {
                        slideBox.style.transitionDuration = '0ms';
                        currentIndex = totalSlides;
                        slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;
                        updatePagination(); // 마지막 슬라이드로 이동한 후 페이지네이션 업데이트
                    }, animationDuration);
                } else {
                    updatePagination();
                }

                restartAutoSlide();
            }
        }

        function showNextSlide() {
            if (!isDragging) {
                currentIndex++;
                slideBox.style.transitionDuration = `${animationDuration}ms`;
                slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;

                if (currentIndex === totalSlides + 1) {
                    setTimeout(() => {
                        slideBox.style.transitionDuration = '0ms';
                        currentIndex = 1;
                        slideBox.style.transform = `translateX(-${currentIndex * 100}%)`;
                    }, animationDuration);
                }

                updatePagination();
                restartAutoSlide();
            }
        }

        function handleTouchStart(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            slideBox.style.transitionDuration = '0ms';
            pauseAutoSlide();
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

        function pauseAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        function restartAutoSlide() {
            pauseAutoSlide();
            autoSlideInterval = setInterval(showNextSlide, 4000);
        }

        cloneSlides();
        createPagination();
        updateSlidePosition();

        slidePrevButton.addEventListener('click', showPrevSlide);
        slideNextButton.addEventListener('click', showNextSlide);
        slideBox.addEventListener('touchstart', handleTouchStart);
        slideBox.addEventListener('touchmove', handleTouchMove);
        slideBox.addEventListener('touchend', handleTouchEnd);

        restartAutoSlide();
    });
});



// 모달 창
document.querySelector('.modal-overlay').addEventListener('click', function(){
    document.querySelector('.modal-overlay').classList.remove('active');
    document.querySelector('.modal-window-wrap').classList.remove('active');
})

function modalWindowOpen(skill){
    const modalWindow = document.querySelector('.modal-window-wrap[data-modal="'+skill+'"]')
    document.querySelector('.modal-overlay').classList.add('active');
    modalWindow.classList.add('active')
    console.log(skill);
}

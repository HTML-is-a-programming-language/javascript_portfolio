// banner slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderBox = document.querySelector('.banner-box');
    const slides = document.querySelectorAll('.banner-list');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000); // 자동 슬라이드 변경

    // 슬라이드 너비 설정 (반응형을 고려하여 매번 계산)
    function slideWidth() {
        return slides[0].getBoundingClientRect().width;
    }

    // 다음 슬라이드로 이동
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    // 슬라이드 위치 업데이트
    function updateSlidePosition() {
        sliderBox.style.transform = `translateX(-${currentSlide * slideWidth()}px)`;
    }

    // 버튼 클릭 이벤트 핸들러 연결
    document.querySelectorAll('.banner-button').forEach((button, index) => {
        button.addEventListener('click', function() {
            currentSlide = index;
            this.classList.add('active');
            updateSlidePosition();
            resetInterval();
        });
    });

    // 자동 슬라이드 변경 인터벌 재설정
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }
});
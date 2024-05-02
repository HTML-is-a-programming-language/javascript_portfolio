// banner slider
document.addEventListener('DOMContentLoaded', function () {
    const bannerBox = document.querySelector('.banner-box');
    console.log(bannerBox);
    const bannerList = document.querySelectorAll('.banner-list');
    console.log(bannerList);
    const bannerWidth = bannerBox.getBoundingClientRect().width;
    console.log(bannerWidth);
    const bannerLength = bannerList.length;
    console.log(bannerLength);
    let currentBanner = 0;

    function autoSlide(){
        if (currentBanner == bannerLength){
            currentBanner = 0;
        }
        bannerBox.style.transform = `translateX(-${bannerWidth * currentBanner}px)`;
        currentBanner = currentBanner + 1;
        console.log(currentBanner)
    }
    setInterval(autoSlide,1000);
});
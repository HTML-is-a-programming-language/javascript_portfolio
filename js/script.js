// banner slider
document.addEventListener('DOMContentLoaded', function () {
    const bannerBox = document.querySelector('.banner-box');
    //console.log(bannerBox);
    const bannerList = document.querySelectorAll('.banner-list');
    //console.log(bannerList);
    const bannerButton = document.querySelectorAll('.banner-button');
    //console.log(bannerButton);
    const bannerWidth = bannerBox.getBoundingClientRect().width;
    //console.log(bannerWidth);
    const bannerLength = bannerList.length;
    //console.log(bannerLength);
    let currentBanner = 0;
    let auto = setInterval(autoSlide,1000);;

    function autoSlide(){
        if (currentBanner == (bannerLength - 1)){
            currentBanner = 0;
            bannerBox.style.transform = `translateX(-${bannerWidth * currentBanner}px)`;
        } else {
            currentBanner = currentBanner + 1;
            bannerBox.style.transform = `translateX(-${bannerWidth * currentBanner}px)`;
        }
        bannerButton.forEach(function(button) {
            button.classList.remove('active');
        });
        bannerButton[currentBanner].classList.add('active');
        //console.log(currentBanner);
    }


    bannerButton.forEach(function(button, index) {
        button.addEventListener('click', function(){
            bannerBox.style.transform = `translateX(-${bannerWidth * index}px)`;
            console.log(button);
            bannerButton[index].classList.add('active');
            currentBanner = index;
            clearInterval(auto);
            auto = setInterval(autoSlide, 1000);
            //console.log(index);
        });
    });
});
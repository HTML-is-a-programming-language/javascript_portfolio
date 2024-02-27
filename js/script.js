// 헤더 로고 이벤트
document.querySelector('.logo-box').addEventListener('mouseenter', function(){
    document.querySelector('.door').style.backgroundColor = 'white';
});

document.querySelector('.logo-box').addEventListener('mouseleave', function(){
    document.querySelector('.door').style.backgroundColor = 'black';
});


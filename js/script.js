// Intersection Observer API로 스크롤 감지
const header = document.querySelector('header');
const observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { rootMargin: "-100px 0px 0px 0px" });

observer.observe(document.querySelector('main'));

// 햄버거 메뉴 토글 기능
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});

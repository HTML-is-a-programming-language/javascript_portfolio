// 모달창 열기
function modalWindowOpen(button) {
  const modalWindowOverlay = document.querySelector('.modal-window-overlay');
  const buttonData = button.dataset.modal;

  document.querySelectorAll('.modal-window-wrap').forEach(modal => {
    const modalWindowData = modal.dataset.modal;
    if (buttonData === modalWindowData) {
      modalWindowOverlay.classList.add('active')
      modal.classList.add('active');
    }
  });

  document.body.classList.add('active');
}

// 모달창 닫기
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".modal-window-overlay");
  const allModalWindowWrap = document.querySelectorAll(".modal-window-wrap");

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      allModalWindowWrap.forEach(modal => {
        modal.classList.remove('active');
      });
    }
    document.body.classList.remove('active');
  });
});
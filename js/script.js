// 모달창 열기
function modalWindowOpen(button) {
  const modalWindowOverlay = document.querySelector('.modal-window-overlay');
  const buttonData = button.dataset.modal;

  document.querySelectorAll('.modal-window-wrap').forEach(modal => {
    const modalWindowData = modal.dataset.modal;
    if (buttonData === modalWindowData) {
      modalWindowOverlay.classList.add('active');
      modal.classList.add('active');
    }
  });

  document.body.classList.add('active');
}

// 모달창 닫기
function modalWindowClose() {
  const overlay = document.querySelector('.modal-window-overlay');
  const allModals = document.querySelectorAll('.modal-window-wrap');

  overlay.classList.remove('active');
  allModals.forEach(modal => modal.classList.remove('active'));
  document.body.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".modal-window-overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      modalWindowClose();
    }
  });
});

// 필터 버튼
function filterButton(e) {
  const buttonData = e.dataset.filter;
  const projectContainer = document.querySelectorAll('.project-container');
  const projectContainerData = document.querySelectorAll(`.project-container[data-filter="${buttonData}"]`);
  const navButton = document.querySelectorAll('.nav-button');
  const navButtonData = document.querySelector(`.nav-button[data-filter="${buttonData}"]`);

  projectContainer.forEach((container)=>{
    if (buttonData == 'all') {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  })

  projectContainerData.forEach((container)=>{
    if (buttonData != 'all') {
      container.classList.add('active');
    }
  })

  if (e.classList.contains('menu-button')) {
    modalWindowClose();

    navButton.forEach((button)=>{
      button.classList.remove('active');
    });

    navButtonData.classList.add('active');
  }

  if (e.classList.contains('nav-button')) {
    navButton.forEach((button)=>{
      button.classList.remove('active');
    });

    e.classList.add('active');
  }
}
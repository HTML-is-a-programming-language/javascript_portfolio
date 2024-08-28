// 프로젝트 데이터를 사용해 동적으로 프로젝트 목록 생성
const projects = [
    {
        title: "프로젝트 1",
        description: "이 프로젝트는..."
    },
    {
        title: "프로젝트 2",
        description: "이 프로젝트는..."
    }
];

const projectSection = document.getElementById('projects');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);

    projectSection.appendChild(projectDiv);
});

// 다크 모드 토글 기능 예시
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
}

const darkModeButton = document.createElement('button');
darkModeButton.textContent = '다크 모드';
darkModeButton.addEventListener('click', toggleDarkMode);

document.body.appendChild(darkModeButton);

// 반응형 자바스크립트 처리 (화면 크기 따라 요소 조정)
window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 768) {
        console.log('태블릿 화면');
    } else if (width >= 1024) {
        console.log('데스크탑 화면');
    } else {
        console.log('모바일 화면');
    }
});

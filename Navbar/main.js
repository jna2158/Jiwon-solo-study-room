const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => { 
    /* toggleBtn을 클릭했을 때 menu와 icon의 클래스가 active가 없다면 active를 추가해주고 있다면 다시 빼준다. */
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

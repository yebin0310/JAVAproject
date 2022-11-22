const a = document.querySelector('.box');
const body = document.querySelector('body');
function dd() {
    setTimeout(() => { a.innerHTML = '<div class="ment">지금부터 내가 너의 심리테스트를 도와줄게!</div>' }, 4000);
    setTimeout(() => { a.innerHTML = '<div class="ment">먼저 위에 시작하기 버튼을 눌러줘~' }, 8000);
    setTimeout(() => btnAppear(), 10000);
}
const div = document.createElement('div');
div.className = 'start';
div.innerText = "시작하기";
const link = document.createElement('a');
function btnAppear() {
    a.appendChild(div);
}
function Click() {
    console.log("클릭");
    location.href = "../pages/main.html";
}
dd();
div.addEventListener('click', Click);
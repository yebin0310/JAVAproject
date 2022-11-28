let counter = 0;
const container = document.getElementById("little");
const start = () => {
    const startBtn = document.getElementById("stBtn");
    const ment = document.getElementById("ment");
    const ment_2 = document.getElementById("ment_2");
    const main_image = document.getElementById("main_image");
    startBtn.remove();
    ment.remove();
    ment_2.remove();
    main_image.remove();
    container.innerHTML = "<p class='q'>내 스타일에 많이 신경쓰는 편이다.</p><div class='ha' ><div class='yes' onclick='next1(false)'>그렇다</div><div class='no' onclick='next1(true)'>아니다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 참을성이 강하다.</p><div class='ha' ><div class='yes' onclick='next2(true)'>그렇다</div><div class='no' onclick='next2(false)'>아니다</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>힘든 일을 일부러 생각하려 하지 않는다.</p><div class='ha' ><div class='yes' onclick='next3(false)'>그렇다</div><div class='no' onclick='next3(true)'>아니다</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'> 자주 우는 편이다.</p><div class='ha' ><div class='yes' onclick='next4(false)'>그렇다</div><div class='no' onclick='next4(true)'>아니다</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>마음에 안 드는 일이 있으면 화부터 난다.</p><div class='ha' ><div class='yes' onclick='next5(false)'>그렇다</div><div class='no' onclick='next5(true)'>아니다</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'> ‘애 늙은이’같다는 소리를 자주 듣는다.</p><div class='ha' ><div class='yes' onclick='next6(true)'>그렇다</div><div class='no' onclick='next6(false)'>아니다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>내 또래 친구들 보다는 윗 사람들과 말이 더 잘 통한다.</p><div class='ha' ><div class='yes' onclick='next7(true)'>그렇다</div><div class='no' onclick='next7(false)'>아니다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>아침에 혼자서는 일어나기 싫다.</p><div class='ha' ><div class='yes' onclick='next8(true)'>그렇다</div><div class='no' onclick='next8(false)'>아니다</div > </div > ";
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
}
const next8 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    result();

};
function result() {
    const total = counter;
    console.log(total);
    container.innerHTML = "<div class='resultBox'><div class='gojja'>당신의 결과는?</div>";
    if (4 > counter && counter > 0) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>이런 애같으니라고<br /> 당신은 나이에 비해 생각이 어리네요 ㅋ</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 평균이에요<br /> 본인 나이대에 딱 맞군요!</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>아이고 어르신~<br /> 세배드릴게요~</div></div > " }, 3000);
    }
}
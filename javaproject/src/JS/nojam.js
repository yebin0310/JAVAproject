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
    container.innerHTML = "<p class='q'>사람들이 나를 거만하다고 생각한다</p><div class='ha' ><div class='yes' onclick='next1(true)'>그렇다</div><div class='no' onclick='next1(false)'>아니다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>사람들이 나를 거만하다고 생각한다</p><div class='ha' ><div class='yes' onclick='next2(true)'>그렇다</div><div class='no' onclick='next2(false)'>아니다</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>사람들로부터 관심받는게 좋다</p><div class='ha' ><div class='yes' onclick='next3(true)'>그렇다</div><div class='no' onclick='next3(false)'>아니다</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>다른 사람보다 우월하게 보여지길 원한다.</p><div class='ha' ><div class='yes' onclick='next4(true)'>그렇다</div><div class='no' onclick='next4(false)'>아니다</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>권위있고 성공적인 자신을 상상하곤 한다.</p><div class='ha' ><div class='yes' onclick='next5(true)'>그렇다</div><div class='no' onclick='next5(false)'>아니다</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>사람들이 내 말대로 따르기를 원한다.</p><div class='ha' ><div class='yes' onclick='next6(true)'>그렇다</div><div class='no' onclick='next6(false)'>아니다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>다른사람의 감정을 이해하는데 어려움이 있다.</p><div class='ha' ><div class='yes' onclick='next7(true)'>그렇다</div><div class='no' onclick='next7(false)'>아니다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>사람들이 나를 칭찬할 때 부끄럽다.</p><div class='ha' ><div class='yes' onclick='next8(false)'>그렇다</div><div class='no' onclick='next8(true)'>아니다</div > </div > ";
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
        setTimeout(() => { container.innerHTML = "<div class='sad'>나르시 시즘 0단계!<br /> 당신은 정상이에요~</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 평균이에요!<br /> 그래도 살짝 주의하는게 좋겠죠?</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 심각한 나르시시즘이에요 ㅜ<br /> 우월감을 좀 낮추는것도 좋아요</div></div > " }, 3000);
    }
}
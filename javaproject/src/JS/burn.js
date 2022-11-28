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
    container.innerHTML = "<p class='q'>익숙하지 않은 사람들이랑 만나도 불편함이 없다.</p><div class='ha' ><div class='yes' onclick='next1(true)'>그렇다</div><div class='no' onclick='next1(false)'>아니다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>누구를 만나는 것 보다 혼자 시간을 보내는게 편하다.</p><div class='ha' ><div class='yes' onclick='next2(false)'>그렇다</div><div class='no' onclick='next2(true)'>아니다</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>친구도 오랜만에 만나면 불편하다.</p><div class='ha' ><div class='yes' onclick='next3(false)'>그렇다</div><div class='no' onclick='next3(true)'>아니다</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>사람들에게 먼저 말을 거는 것이 쉽다.</p><div class='ha' ><div class='yes' onclick='next4(true)'>그렇다</div><div class='no' onclick='next4(false)'>아니다</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>모임에 나갔을 때 대화에 잘 끼어들지 못한다.</p><div class='ha' ><div class='yes' onclick='next5(false)'>그렇다</div><div class='no' onclick='next5(true)'>아니다</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>연락하는 이성친구가 거의 없다.</p><div class='ha' ><div class='yes' onclick='next6(false)'>그렇다</div><div class='no' onclick='next6(true)'>아니다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'> 나이가 더 많은 사람들과 대화를 하는게 불편하다.</p><div class='ha' ><div class='yes' onclick='next7(false)'>그렇다</div><div class='no' onclick='next7(true)'>아니다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>사람들과 연락을 하는 것을 좋아한다.</p><div class='ha' ><div class='yes' onclick='next8(true)'>그렇다</div><div class='no' onclick='next8(false)'>아니다</div > </div > ";
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
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 대인기피증일 확률이 높아요<br /> 정밀검사를 받아보는게 좋겠어요!</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 평균이에요!<br /> 그래도 살짝 주의하는게 좋겠죠?</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 밝고 명랑한 사람! <br /> 항상 밝은 에너지를 가지고 있어요!</div></div > " }, 3000);
    }
}
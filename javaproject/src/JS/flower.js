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
    container.innerHTML = "<p class='q'>내가 다른사람만큼 가치있는 사람이라고 생각한다</p><div class='ha' ><div class='yes' onclick='next1(true)'>그렇다</div><div class='no' onclick='next1(false)'>아니다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 좋은 자질을 많이 가지고 있는 것 같다</p><div class='ha' ><div class='yes' onclick='next2(false)'>그렇다</div><div class='no' onclick='next2(true)'>아니다</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 대체로 내가 실패한 사람이라는 느낌이 든다</p><div class='ha' ><div class='yes' onclick='next3(true)'>그렇다</div><div class='no' onclick='next3(false)'>아니다</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 대부분의 다른사람들만큼 일을 잘한다고 생각한다</p><div class='ha' ><div class='yes' onclick='next4(true)'>그렇다</div><div class='no' onclick='next4(false)'>아니다</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 자랑할만한 것이 별로 없는것 같다</p><div class='ha' ><div class='yes' onclick='next5(false)'>그렇다</div><div class='no' onclick='next5(true)'>아니다</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>나는 나 자신에 대해 긍정적인 태도를 가지고 있다</p><div class='ha' ><div class='yes' onclick='next6(true)'>그렇다</div><div class='no' onclick='next6(false)'>아니다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'> 나는 대체로 자신에게 만족하는 편이다</p><div class='ha' ><div class='yes' onclick='next7(true)'>그렇다</div><div class='no' onclick='next7(false)'>아니다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>나는 나 자신을 조금 더 존중할 수 있기를 바란다</p><div class='ha' ><div class='yes' onclick='next8(false)'>그렇다</div><div class='no' onclick='next8(true)'>아니다</div > </div > ";
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
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 자존감이 낮은 편이에요<br /> 항상 응원하는 사람이 있다는걸 잊지 말아요</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 평균이에요!<br /> 지금을 꼭 유지하길 바랄게요</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 자존감이 넘치는 사람! <br /> 너무 부러워요!</div></div > " }, 3000);
    }
}
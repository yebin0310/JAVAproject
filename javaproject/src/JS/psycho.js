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
    container.innerHTML = "<p class='q'>거짓말을 해도 아무렇지도 않다.</p><div class='ha' ><div class='yes' onclick='next1(true)'>그렇다</div><div class='no' onclick='next1(false)'>아니다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>계획을 잘 세우지 않고 항상 즉흥적이다.</p><div class='ha' ><div class='yes' onclick='next2(true)'>그렇다</div><div class='no' onclick='next2(false)'>아니다</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>필요에 의해서라면 사랑하는 사람을 배신 할 수 있다.</p><div class='ha' ><div class='yes' onclick='next3(true)'>그렇다</div><div class='no' onclick='next3(false)'>아니다</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>괜찮은 제안이 있으면 오래된 계획을 쉽게 포기할 수 있다.</p><div class='ha' ><div class='yes' onclick='next4(true)'>그렇다</div><div class='no' onclick='next4(false)'>아니다</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>고통받는 동물을 봐도 아무렇지도 않다.</p><div class='ha' ><div class='yes' onclick='next5(true)'>그렇다</div><div class='no' onclick='next5(false)'>아니다</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>빠르게 달리는 자동차나 롤러코스터를 타는게 좋다.</p><div class='ha' ><div class='yes' onclick='next6(true)'>그렇다</div><div class='no' onclick='next6(false)'>아니다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>목표를 위해서라면 다른사람을 짓밟는것도 나쁘지 않다.</p><div class='ha' ><div class='yes' onclick='next7(true)'>그렇다</div><div class='no' onclick='next7(false)'>아니다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>사람을 다루는데 능숙해서 원하는 것을 쉽게 얻어낼 수 있다.</p><div class='ha' ><div class='yes' onclick='next8(true)'>그렇다</div><div class='no' onclick='next8(false)'>아니다</div > </div > ";
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
        setTimeout(() => { container.innerHTML = "<div class='sad'>싸이코패스 0%!<br /> 당신은 정상이에요~</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 살짝~?<br /> 저한테 오진 말아주세요 ㅎ</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 심각한 싸이코패스 그 잡채!<br /> 그대로 돌아서 남극으로 가주세요</div></div > " }, 3000);
    }
}
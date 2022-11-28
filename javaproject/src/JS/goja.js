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
    container.innerHTML = "<p class='q'>당신의 최근 연애 활동은?</p><div class='ha' ><div class='yes' onclick='next1(true)'>나는 최근 1년간 연애 한적이 있다</div><div class='no' onclick='next1(false)'> 나는 최근 1년간 연애 한적이 없다</div > </div > ";
};

const next1 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>여자친구와 첫 데이트 날이다. 당신이 보낼 문자는?</p><div class='ha' ><div class='yes' onclick='next2(false)'>준비 다했어?<br/> 늦으면 알지혼난다 ㅎㅎ</div><div class='no' onclick='next2(true)'> 내일 집앞으로 데리러<br/> 가도 될까?</div > </div > ";
}
const next2 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>애인이  밥 먹었어?<br/>라고 묻는다면?</p><div class='ha' ><div class='yes' onclick='next3(false)'>이미 먹었지만 안먹은척 한다<br/> '아니 안먹었어 ㅎㅎ'</div><div class='no' onclick='next3(true)'> 응 얼마안돼서 좀 배가 부르네.<br/> OO이 배고프면 간단히 먹을까?<br/>에그드랍어때?</div > </div > ";
}
const next3 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>여자친구의 친구들을 만나는 자리이다.<br/>당신이 입을 옷은?</p><div class='ha' ><div class='yes' onclick='next4(false)'>한껏 꾸민 정장</div><div class='no' onclick='next4(true)'> 캐주얼한 평소 복장</div > </div > ";
}
const next4 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>어두운 가로등 아래.<br/>주위를 둘러봐도 그녀와 나밖에 없다<br/>당신의 선택은?</p><div class='ha' ><div class='yes' onclick='next5(false)'>'지금이 타이밍인가?' 자연스럽게 행동한다</div><div class='no' onclick='next5(true)'> 아직은 아니다. <br/>그녀의 의견이 확실해질때 시도하자</div > </div > ";
}
const next5 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>친구와의 약속이 끝나고 <br/> '집에 갈거야 '라는 연락 이후<br/> 3시간동안 연락이 없는 상대방.<br/> 당신의 행동은?</p><div class='ha' ><div class='yes' onclick='next6(false)'>당장 전화를 건다</div><div class='no' onclick='next6(true)'> 집에 잘 들어갔냐는 연락을 남긴다</div > </div > ";
}
const next6 = (current) => {
    if (current === true) {
        counter = counter + 1;
        console.log(counter);
    }
    container.innerHTML = "<p class='q'>애인과 걸어가던 중 <br/>정말 마음에 드는 이성이<br/> 내 번호를 물어본다<br/> 당신의 행동은?</p><div class='ha' ><div class='yes' onclick='next7(true)'>일단 지금은 죄송하다고 하고<br/> 나중에 몰래 연락한다</div><div class='no' onclick='next7(false)'>나는 지금 애인이 있으니 당연히 거절한다</div > </div > ";
}

const next7 = (current) => {
    container.innerHTML = "<p class='q'>애인의 생일과 100일이 겹친다 <br/>당신의 선택은?</p><div class='ha' ><div class='yes' onclick='next8(false)'>두번이나 챙길 필요 있나~<br/> 그냥 한번에 한다</div><div class='no' onclick='next8(true)'>서운해 할수 있으니 당연히 따로 챙긴다</div > </div > ";
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
        setTimeout(() => { container.innerHTML = "<div class='sad'>연애 고자 당첨..ㅠ<br /> 안타깝네요 ㅜ</div></div > " }, 3000);
    } else if (6 > counter && counter >= 4) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 평균이에요!<br /> 올해가 얼마 안남았어요! 화이팅!</div></div > " }, 3000);
    } else if (counter >= 6) {
        setTimeout(() => { container.innerHTML = "<div class='sad'>당신은 연애고수!<br /> 행복한 크리스마스 되세요~</div></div > " }, 3000);
    }
}
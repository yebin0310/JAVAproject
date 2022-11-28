import './styles/main.css';
import React from 'react';
import { useState } from 'react';

function Main() {
    return (
        <div>
            <nav>
                <div className="logo" >
                    <img src='mindreader/images/로고.png' width="20" alt='' />
                </div>
                <div className="user">
                    <div className="login">로그인</div>
                    <div className="signup">회원가입</div>
                </div>
            </nav>
            <main>
                <header>
                    <text>
                        <h3>당신의 삶을 바꿔줄 심리테스트</h3>
                        <p>내가 생각했던 나와 실제 나는 같을까?</p>
                        <p>당신의 내면을 찾아보세요</p>
                    </text>
                    <img src="https://img.mimint.co.kr/love/bbs/2018/4/22/20180422175610_nzuqmznd.png" width="400" alt='' />
                </header>
                <div className="container2">
                    <div className="boxes">
                        <ul className="first">
                            <a href="./goja.html">
                                <li>
                                    연애 고자 테스트
                                </li>
                            </a>
                            <li>
                                <a href="./nojam.html">
                                    인생 노잼 테스트
                                </a>

                            </li>
                        </ul>
                        <ul className="second">
                            <li>
                                <a href="./work.html">
                                    나는 어떤 일잘러 일까?
                                </a>
                            </li>
                            <li>
                                <a href="./work.html">
                                    연애 꽃말 테스트
                                </a>
                            </li>
                        </ul>
                        <ul className="third">
                            <li>
                                <a href="./burn.html">
                                    현대인 번아웃 테스트
                                </a>
                            </li>
                            <li>
                                <a href="./brain.html">
                                    두뇌 레벨 테스트
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div >
    );
};

export default Main;
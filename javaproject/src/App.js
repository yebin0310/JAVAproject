import './App.css';
import React from 'react';
import { useState } from 'react';
function Btnstyle() {
  const [btn, setBtn] = useState(true);
  const removeElement = () => {
    setBtn((current) => !current);
  };
  return (
    <div >
      {btn &&
        <div className='little'>
          <div className='title_2'>설마 곧 18살인데 아직 모태솔로..?</div>
          <div className='under' >※개발자의 개인적인 견해가 들어갈 수 있습니다</div>
        </div>
      }
      {btn &&
        <img alt="천명 테스트 메인" src="https://d2k6w3n3qf94c4.cloudfront.net/prod.static/test_content/chunmyung/img/main_illust.fd21bbc3d3c6.png" id="main_image" width={300}></img>}
      {btn && (
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            outline: "none",
            width: "20vw",
            height: "10vh",
            borderRadius: "10px",
            marginRight: "5px",
            cursor: "pointer",
            boxShadow: " 0px 0px 10px 5px rgba(17, 17, 17, 0.158)",
          }}
          onClick={() => {
            removeElement();
          }} className="btn" >
          시작하기
        </button >)}
    </div >

  );
}

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='box_1'>
          <div className='title'>연애 고자 테스트</div>
        </div>
        <div className='box_2'>
          {<Btnstyle />}
        </div>
      </div>
    </div >
  );
}

export default App;

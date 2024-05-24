import React from "react";
import './home.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <div className="snow1"></div>
            <div id="text">
                국가는 여러분의 돈을 지켜주지 않습니다 <br />
                Retire을 사용해서 노후자산을 직접 계획해보세요!
            </div>
            <div id="buttons">
            <Link to="/what"><Button id="button1"variant="contained" size="large">What is Retire Plan?</Button></Link>
                <Button id="button2" variant="contained">은퇴자금 계산하기</Button>
            </div>
            <div className="snow2"></div>
            <div className="snow3"></div>
        </main>
    );
}

//날씨 정보를 인터넷에서 파싱해와서 비오면 비로 눈이면 눈으로 화창하면 화창하게
//흐리면 흐리게 바꿔주기.
export default Home;
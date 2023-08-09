import img from './img.svg';
import {Link }from 'react-router-dom';
import './App.css';
import {useState} from "react";
import axios from "axios";
// 서버와 통신할때 spa 유지하면서 ajax
import Button from "./button";
const ComSignup= () => {

    return (
        <div className='complete_ComSignup'>
            <header className="App-header">
                <img src={img} alt="xx"/>
                <p></p>
                <div className='ComSignup'>
                    회원가입 완료
                </div>
                <p></p>
                <p className='a' >친구들과 대화를 통해 필요한 정보를 찾아보세요.</p>
                {/*로그인페이지 연결하면 될듯?*/}

                <Link to ='/login'>
                    <Button
                    text={'로그인'}
                    backgroundColor ={'rgb(152,98,222)'}
                    outlined ={true}
                    borderColor ={'rgb(236,240,243)'}
                />
                </Link>
            </header>
        </div>

    );
};

export default ComSignup;
import {useState,useRef} from "react";
import React from 'react';
import test from './test.svg'
import Modal from "./modal";
import NewModal from "./newmodal";
import './App.css';
import axios  from "axios";
import {Link} from "react-router-dom";

export default function ChatList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isnewModalOpen, setnewIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const opennewModal = () => setnewIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  const closenewModal = () => setnewIsModalOpen(false);


  // 기본적으로 작동하는 이벤트를 막고 새로운 함수를 할당
  // const open = (e) => {
  //     e.preventDefault();
  //     openModal();
  //
  // }

  const timer=useRef(null);
  const [isclick, setclick] = useState(false);
  const  handlemousedown=()=>{
    setclick(true);
    timer.current=setTimeout(openModal,1100);
    // 1.5초 누르면 openModal함수 실행

  }
  // 마우스 때지면 타이머 초기화
  const  handlemouseup=()=>{
    setclick(false);
    clearTimeout(timer.current);
  }
  // 왜 안되는지??

  const  Opennewmodal=()=>{
    opennewModal();
    closeModal();

  }
  return (
      <div>
        <div>
          {/*여기서는 브라우저의 기본오른쪽 버튼을 막고 모달폼을여는 함수를 할당 */}
          {/*<img src={test} onContextMenu={event => open(event)} alt=""/>*/}
          {/*일정시간이상 누르고 있으면 모달폼 열림*/}
          {/*    / 안붙이면 현재 url에 + 해서 연결  new/signup*/}
          {/*채팅방 url 연결*/}

          {/*<Link to='/'>*/}
            <img src={test}  onMouseDown={handlemousedown} onMouseUp={handlemouseup} alt=""/>
          {/*</Link>*/}
          {/*<p onMouseDown={handlemousedown} onMouseUp={handlemouseup}>hello</p>*/}


          {/*채팅방 나가기 눌렀을때*/}

          <NewModal isOpen={isnewModalOpen} closeModal={closenewModal}  >
              <br/>

            <h4>채팅방을 한번 삭제하면 복원할 수 없습니다 <br/>채팅방에서 나가시겠습니까?</h4>
            <div className='button'>

              <h2 > yes</h2>
              <h2 onClick={closenewModal}>no</h2>

            </div>

          </NewModal>

          <Modal isOpen={isModalOpen} closeModal={closeModal} >
            {/*onclick식 작동할 함수 넣기*/}
          <div style={{position:'relative'}}  >
              <br/>
            <br/>


            <h1 style={{color:"red"}} onClick={Opennewmodal} >채팅방 나가기</h1>
            <br/>

            <h1 onClick={closeModal}>취소</h1>

           </div>
            {/*버튼을 눌렀을때 취소되게*/}
          </Modal>
        </div>



      </div>

  )
}

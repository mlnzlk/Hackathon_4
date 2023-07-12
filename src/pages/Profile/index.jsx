import Header from "../../module/Header";
import iconModify from "../../assets/icon-modify.svg"
import iconRightArrow from "../../assets/icon-rightArrow.svg"
import * as S from "./style"
import { useNavigate } from "react-router-dom";
import useModal from "../../hook/useModal";
import Button from "../../module/Button";

export default function Profile() {
  const navigate = useNavigate()
  const { Modal, open, close } = useModal()

  return (
    <>
      <h1 className="ir">마이페이지</h1>
      <Header text="마이페이지" />
      <S.ProfileSection>
        <S.UserDesc>
          <div>
            <p>홍길동님</p>
            <span>광운대학교</span>
          </div>  
          <S.ModifyBtn onClick={() => navigate('/changename')}>
            <img src={iconModify} alt="" />
          </S.ModifyBtn>
        </S.UserDesc>
        <ul>
          <S.ProfileLi>
            <p>시간표 변경</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi onClick={() => navigate('/changepw')}>
            <p>비밀번호 변경</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi>
            <p>로그아웃</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi onClick={open}>
            <p>계정 탈퇴</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
        </ul>
      </S.ProfileSection>
      <Modal>
        <S.ModalTit>회원탈퇴</S.ModalTit>
        <S.ModalTit>탈퇴 시, 회원정보 및 이용기록이 모두 삭제되며, <br />계정 복구는 불가능합니다.</S.ModalTit>
        <div>
          <Button text='네' className='main' borderRadius='5px' padding="10px 32px" fontSize="14px" />
          <Button text='아니오' className='line' borderRadius='5px' padding="9px 20px" fontSize="14px" onClick={close}/>
        </div>
      </Modal>
    </>
  )
}

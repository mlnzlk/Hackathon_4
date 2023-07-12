import Header from "../../module/Header";
import iconModify from "../../assets/icon-modify.svg"
import iconRightArrow from "../../assets/icon-rightArrow.svg"
import * as S from "./style"

export default function Profile() {
  return (
    <>
      <Header text="마이페이지" />
      <section>
        <S.UserDesc>
          <div>
            <p>홍길동님</p>
            <span>광운대학교</span>
          </div>  
          <S.ModifyBtn>
            <img src={iconModify} alt="" />
          </S.ModifyBtn>
        </S.UserDesc>
        <ul>
          <S.ProfileLi>
            <p>시간표 변경</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi>
            <p>비밀번호 변경</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi>
            <p>로그아웃</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
          <S.ProfileLi>
            <p>계정 탈퇴</p>
            <img src={iconRightArrow} alt="" />
          </S.ProfileLi>
        </ul>
      </section>
    </>
  )
}

import * as S from "./style"
import backBtn from "../../assets/icon-backBtn.svg"
import ChatBackBtn from "../../assets/icon-leftArrow.svg"
import IconSetting from "../../assets/icon-setting.svg"
import IconPerson from "../../assets/icon-person.svg"
import IconSearch from "../../assets/icon-search.svg"
import { useLocation } from "react-router-dom"

export default function Header({ text, num }) {
  const location = useLocation()

  if (location.pathname.includes('/chatlist')) {
    return (
      <S.HeaderWrap className="chatlist">
        <S.ChatListTitle>채팅</S.ChatListTitle>
        <button>
          <img src={IconSetting} alt="마이페이지로 이동" />
        </button>
      </S.HeaderWrap>
    )
  } else if (location.pathname.includes('/chat')) {
    return (
      <S.ChatWrap>
        <button>
          <img src={ChatBackBtn} alt="채팅방 리스트 페이지로 이동" />
        </button>
        <S.ClassTitleWrap>
          <p>{text}</p>
          <img src={IconPerson} alt="" />
          <span>{num}</span>
        </S.ClassTitleWrap>
        <button className="search">
          <img src={IconSearch} alt="" />
        </button>
      </S.ChatWrap>
    )
  } else {
    return (
      <S.HeaderWrap>

        <img src={backBtn} alt="이전 페이지로 이동" />
        <S.Title>{text}</S.Title>
      </S.HeaderWrap>
    )
  }
}

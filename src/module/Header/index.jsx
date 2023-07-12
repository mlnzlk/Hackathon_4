import * as S from "./style"
import backBtn from "../../assets/icon-backBtn.svg"
import ChatBackBtn from "../../assets/icon-leftArrow.svg"
import IconSetting from "../../assets/icon-setting.svg"
import IconPerson from "../../assets/icon-person.svg"
import IconSearch from "../../assets/icon-search.svg"
import IconUpArrow from "../../assets/icon-upArrow.svg"
import IconDownArrow from "../../assets/icon-bottomArrow.svg"
import IconClose from "../../assets/icon-close.svg"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export default function Header({ text, num }) {
  const [search, setSearch] = useState(true)
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
      <>
        <S.ChatWrap>
          <S.ChatWrapDiv>
            <button>
              <img src={ChatBackBtn} alt="채팅방 리스트 페이지로 이동" />
            </button>
            <S.ClassTitleWrap>
              <p>{text}</p>
              <img src={IconPerson} alt="" />
              <span>{num}</span>
            </S.ClassTitleWrap>
            <button className="search" onClick={() => setSearch(!search)}>
              <img src={IconSearch} alt="" />
            </button>
          </S.ChatWrapDiv>
          {search && (
            <S.SearchWrap>
              <S.SearchInp type="text" placeholder="대화내용 검색" />
              <button><img src={IconUpArrow} alt="" /></button>
              <button><img src={IconDownArrow} alt="" /></button>
              <button onClick={() => setSearch(false)}><img src={IconClose} alt="" /></button>
              </S.SearchWrap>
            )}
        </S.ChatWrap>
      </>
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

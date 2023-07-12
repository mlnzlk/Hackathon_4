import * as S from "./style"
import backBtn from "../../assets/icon-backBtn.svg"

export default function Header({text}) {
  return (
    <S.HeaderWrap>
      <img src={backBtn} alt="" />
      <S.Title>{text}</S.Title>
    </S.HeaderWrap>
  )
}

import Header from "../../module/Header";
import iconSend from "../../assets/icon-send.svg"
import * as S from "./style"

export default function Chat() {
  return (
    <>
      <Header text={'미디어커뮤니케이션의이해'} num="30" />
      <S.Section>
        <S.UserName>홍길동</S.UserName>
        <S.ChatWrap>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta maxime expedita nesciunt ratione illo voluptatibus eaque. Ratione, nobis earum veritatis fuga alias ea quasi nostrum nihil ducimus? Quam, quas?</p>
        </S.ChatWrap>
        <S.ChatWrap className="me">
          <p>홍길동입니다. 홍길동입니다. 홍길동입니다. 홍길동입니다. 홍길동입니다. 홍길동입니다. 홍길동입니다. 홍길동입니다. </p>
        </S.ChatWrap>
      </S.Section>
      <S.SendBar>
        <input type="text" placeholder="메시지를 입력하세요." />
        <img src={iconSend} alt="" />
      </S.SendBar>
    </>
  )
}

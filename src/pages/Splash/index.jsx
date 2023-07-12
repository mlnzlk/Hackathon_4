import * as S from "./style"
import Logo from "../../assets/logo-white.png"

export default function Splash() {
  return (
    <S.Section>
      <img src={Logo} alt="" />
      <p>서비스에 대한 간단한 소개 서비스에 대한 간단한 소개</p>
    </S.Section>
  )
}

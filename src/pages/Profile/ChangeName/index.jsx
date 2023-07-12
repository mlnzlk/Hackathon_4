import Button from "../../../module/Button";
import Header from "../../../module/Header";
import * as S from "../style"

export default function ChangeName() {
  return (
    <>
      <h1 className="ir">닉네임 변경</h1>
      <Header text="닉네임 변경" />
      <S.ChangeSection>
        <S.NameLabel htmlFor="nickname">닉네임</S.NameLabel>
        <S.NameInput id="nickname" type="text" placeholder="닉네임" />
        <Button text="확인" className="sub" padding="19px 0" width="100%" borderRadius="10px" />
      </S.ChangeSection>
    </>
  )
}

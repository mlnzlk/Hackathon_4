import * as S from "../style"
import Button from "../../../module/Button";
import Header from '../../../module/Header'

export default function ChangePW() {
  return (
    <>
      <h1 className="ir">비밀번호 변경</h1>
      <Header text="비밀번호 변경" />
      <S.ChangeSection>
        <S.PwLabel htmlFor="prev">현재 비밀번호를 입력해주세요.</S.PwLabel>
        <S.PwInput id="prev" type="password" placeholder="이전 비밀번호" />
        <S.PwLabel htmlFor="change">새로운 비밀번호를 입력해주세요.</S.PwLabel>
        <S.PwInput id="change" type="password" placeholder="새 비밀번호"/>
        <S.PwInput type="password" placeholder="새 비밀번호 확인"/>
        <Button text="비밀번호 변경" className="sub" padding="19px 0" width="100%" borderRadius="10px" />
      </S.ChangeSection>
    </>
  )
}

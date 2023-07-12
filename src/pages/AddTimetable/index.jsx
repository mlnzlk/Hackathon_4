import TimetableList from "../../components/TimetableList";
import Button from "../../module/Button";
import Header from "../../module/Header";
import * as S from "./style"

export default function AddTimetable() {

  return (
    <>
      <Header text="시간표" />
      <S.Section>
        <S.Input type="text" placeholder="수업명을 검색하세요."/>
        <Button text="검색" className="main" padding="13px 28px" fontSize="15px" borderRadius="5px" />
        {
          true ? <TimetableList /> : <S.Desc>시간표를 추가해보세요.</S.Desc>
        }
      </S.Section>
    </>
  )
}

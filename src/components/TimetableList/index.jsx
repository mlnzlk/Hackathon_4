import TtListComp from "./TtListComp"
import * as S from "./style"
import { useSelector } from "react-redux"

export default function TimetableList() {
  const timetable = useSelector(state => state.classList.classList)

  return (
    <S.Ul>
      <S.Li>
        <p>교과목명</p>
        <p>시간</p>
      </S.Li>
      {timetable.map((val, idx) => <TtListComp key={idx} data={val} idx={idx} /> )}
    </S.Ul>
  )
}

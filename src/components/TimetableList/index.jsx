import TtListComp from "./TtListComp"
import * as S from "./style"

const data = [
  {
    num: "0000-2-7724-01",
    professor: "오문석",
    title: "미디어커뮤니케이션의이해",
    time: "화5,6",
  }, {
    num: "0000-2-7724-01",
    professor: "김문석",
    title: "생활속의 디자인",
    time: "월2 수1",
  }, {
    num: "0000-2-7724-01",
    professor: "문상현",
    title: "비주얼커뮤니케이션디자인",
    time: "수5,6",
  }
  
]

export default function TimetableList() {
  return (
    <S.Ul>
      <S.Li>
        <p>교과목명</p>
        <p>시간</p>
      </S.Li>
        { data.map((val, idx) =>
          <TtListComp key={idx} data={val} />
        )}
    </S.Ul>
  )
}

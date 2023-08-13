import * as S from "./style"

export default function ChatLi({content}) {
  return (
    <S.ContLi>
      <div>
        <S.Title>{content.title}</S.Title>
        <S.LatestText>{content.latest || "최근 대화 내용이 없습니다."}</S.LatestText>
      </div>
      {
        content.count &&
        <S.CountWrap>
          <S.Count>{content.count >= 99 ? "99+" : content.count}</S.Count>
        </S.CountWrap>
      }
    </S.ContLi>
  )
}

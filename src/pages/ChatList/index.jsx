import ChatLi from '../../components/ChatLi'
import Header from '../../module/Header'
import * as S from "./style"

let data = [
  {
    title: "미디어커뮤니케이션의이해",
    latest: "미디어커뮤니케이션의이해 대화내용대화내용대화내용대화내용",
    count: 21
  },{
    title: "생활속의디자인",
    latest: "최근 대화내용, 최근 대화내용",
    count: 2
  }, {
    title: "미술의이해",
    latest: "미술의이해 미술의이해 대화내용",
  }, {
    title: "법과경제",
    latest: "법과경제 법과경제법과경제",
    count: 112
  }, {
    title: "컴퓨팅사고",
  }
]

export default function ChatList() {
  return (
    <>
      <Header />
      <S.ClassUl>
        {data.map((content, idx) =>
          <ChatLi key={idx} content={content} />
        )}
      </S.ClassUl>
    </>
  )
}

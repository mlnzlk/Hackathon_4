import { useState } from "react";
import { getSearchClass } from "../../api/api";
import TimetableList from "../../components/TimetableList";
import Desc from "../../assets/desc.jpeg"
import Button from "../../module/Button";
import Header from "../../module/Header";
import * as S from "./style"
import { useDispatch, useSelector } from "react-redux";
import { setClassList } from "../../store/reducer/classListSlice";

export default function AddTimetable() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()
  const timetable = useSelector(state => state.classList.classList)

  function parseSubject(subjectElement) {
    const internal = subjectElement.querySelector('internal').getAttribute('value');
    const name = subjectElement.querySelector('name').getAttribute('value');
    const professor = subjectElement.querySelector('professor').getAttribute('value');
    const time = subjectElement.querySelector('time').getAttribute('value');

    if (!!internal) {
      return {
        internal,
        name,
        professor,
        time
      };
    }
  }

  function xmlToJSON(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const subjectElements = xmlDoc.querySelectorAll('subject');
    const subjects = Array.from(subjectElements).map(subjectElement => parseSubject(subjectElement));
    const filteredArray = subjects.filter(item => item !== undefined);

    setData(filteredArray)
    dispatch(setClassList(filteredArray))
  }

  const handleUrl = async e => {
    if (url.includes("everytime.kr/@")) {
      const sendKey = url.split("@")[1]
      const res = await getSearchClass(sendKey)
      xmlToJSON(res)
      setUrl('')
    } else alert('URL 형식에 오류가 있습니다')
  }

  return (
    <>
      <Header text="시간표" />
      <S.Section>
        <S.Input value={url} type="text" placeholder="URL을 입력해주세요." onKeyDown={e => e.key === 'Enter' && handleUrl(e)} onChange={e => setUrl(e.target.value)} />
        <Button onClick={handleUrl} text="불러오기" className="main" padding="13px 20px" fontSize="16px" borderRadius="5px" />
        {
          timetable.length ? 
            <>
              <TimetableList timetable={data} /> 
              <Button text="완료" className="main finish" padding="19px 0" width="100%" borderRadius="10px" />
            </>
          : 
            <>
              <S.Desc>에브리타임의 시간표 탭에서 설정 버튼을 누르고,<br />URL을 복사하여 입력란에 붙여놓기 해주세요.</S.Desc>
              <S.DescImg src={Desc} alt="" />
            </>
        }
      </S.Section>
    </>
  )
}

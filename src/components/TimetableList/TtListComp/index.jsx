import Button from "../../../module/Button";
import * as S from "../style"

export default function TtListComp({ data }) {
  return (
    <S.Li>
      <S.DescWrap>
        <span>{data.num} <b>{data.professor}</b></span>
        <p>{data.title}</p>
      </S.DescWrap>
      <S.TimeDesc>{data.time}</S.TimeDesc>
      <Button text='삭제' className='line' borderRadius='5px' padding="8px 15px" fontSize="12px" fontWeight="600"/>
    </S.Li>
  )
}

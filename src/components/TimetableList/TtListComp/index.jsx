import { useDispatch } from "react-redux";
import useModal from "../../../hook/useModal";
import Button from "../../../module/Button";
import { removeClass } from "../../../store/reducer/classListSlice";
import * as S from "../style"

export default function TtListComp({ data, idx }) {
  const { Modal, open, close } = useModal()
  const dispatch = useDispatch()

  const handleDeleteClass = () => {
    dispatch(removeClass(idx))
    close()
  }

  return (
    <>
      <S.Li>
        <S.DescWrap>
          <span>{data.internal} <b>{data.professor}</b></span>
          <p>{data.name}</p>
        </S.DescWrap>
        <S.TimeDesc>{data.time}</S.TimeDesc>
        <Button text='삭제' className='line' borderRadius='5px' padding="8px 15px" fontSize="12px" fontWeight="600" onClick={open}/>
      </S.Li>
      <Modal>
        <S.ModalTxt>해당 시간표를 삭제하시겠습니까?</S.ModalTxt>
        <div>
          <Button text='네' className='main' borderRadius='5px' padding="10px 32px" fontSize="14px" fontWeight="600" onClick={handleDeleteClass}/>
          <Button text='아니오' className='line' borderRadius='5px' padding="9px 20px" fontSize="14px" fontWeight="600" onClick={close}/>
        </div>
      </Modal>
    </>
  )
}

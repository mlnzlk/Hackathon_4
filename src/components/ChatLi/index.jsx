import useModal from "../../hook/useModal"
import Button from "../../module/Button";
import * as S from "./style"

export default function ChatLi({ content }) {
  const { Modal, open, close } = useModal()

  const handleModal = e => {
   setTimeout(() => {
      open()
    }, 1000); 
  }

  return (
    <>
      <S.ContLi onMouseDown={handleModal}>
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
      <Modal>
        <S.ModalTitle>채팅방 나가기</S.ModalTitle>
        <S.ModalText>채팅방에서 나갈 경우 대화내용이 모두 삭제됩니다.</S.ModalText>
         <div>
          <Button text='네' className='main' borderRadius='5px' padding="10px 32px" fontSize="14px" fontWeight="600" />
          <Button text='아니오' className='line' borderRadius='5px' padding="9px 20px" fontSize="14px" fontWeight="600" onClick={close}/>
        </div>
      </Modal>
    </>
  )
}

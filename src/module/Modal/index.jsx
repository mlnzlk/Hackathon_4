import * as S from "./style"

export default function Modal({ onClose, children }) {
  return (
    <S.Wrapper onClick={onClose}>
      <S.ModalStyle onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalStyle>
    </S.Wrapper>
  )
}
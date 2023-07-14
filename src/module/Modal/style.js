import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalStyle = styled.div`
  width: 300px;
  padding: 20px 0 14px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.text.white};
  border-radius: 10px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;

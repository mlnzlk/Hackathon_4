import { styled } from "styled-components";

export const ContLi = styled.li`
  padding: 20px;
  box-sizing: border-box;
  min-height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g5};

  & > div:first-of-type {
    text-align: left;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.text.black};
  font-size: 16px;
  line-height: normal;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const LatestText = styled.span`
  color: ${(props) => props.theme.color.gray.g3};
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  display: block;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 500px) {
    width: 400px;
  }
  @media screen and (min-width: 600px) {
    width: 500px;
  }
`;

export const CountWrap = styled.div`
  background-color: ${(props) => props.theme.color.main};
  z-index: -10;
  width: 27px;
  height: 27px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  line-height: normal;
  position: relative;
  text-align: center;
  width: 30px;
  font-size: 12px;
  margin-top: 2px;
  color: ${(props) => props.theme.color.text.white};
`;

export const ModalTitle = styled.p`
  color: #000;
  text-align: center;
  font-size: 16px;
  margin: 6px 0 10px;
  font-weight: 700;
`;

export const ModalText = styled.p`
  color: #000;
  text-align: center;
  font-size: 12px;
  margin-bottom: 14px;
`;

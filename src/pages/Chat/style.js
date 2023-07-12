import { styled } from "styled-components";

export const Section = styled.section`
  padding: 20px;
  margin-top: 110px;
`;

export const UserName = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 6px;
`;

export const ChatWrap = styled.div`
  max-width: 222px;
  padding: 12px;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.2);
  font-weight: 400;
  line-height: 1.2;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray.g3};
  margin-bottom: 12px;

  border-radius: 0px 10px 10px 10px;
  background-color: ${(props) => props.theme.color.gray.g5};

  &.me {
    border-radius: 10px 0px 10px 10px;
    background-color: ${(props) => props.theme.color.sub};
    float: right;
  }
`;

export const SendBar = styled.div`
  width: 100%;
  min-width: 390px;
  max-width: 599px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.color.gray.g4};
  background-color: #fff;
  box-shadow: 0px -5px 5px -5px rgba(0, 0, 0, 0.25);
  padding: 10px 20px 42px;
  box-sizing: border-box;

  & > input {
    border-radius: 30px;
    border: 0.5px solid ${(props) => props.theme.color.gray.g2};
    padding: 11px 12px;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    font-size: 12px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: ${(props) => props.theme.color.text.gray};
    }
  }

  & > img {
    width: 26px;
    vertical-align: middle;
    text-align: right;
    padding-left: 14px;
  }
`;

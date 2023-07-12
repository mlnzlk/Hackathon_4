import { styled } from "styled-components";

export const UserDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g5};

  & > div {
    text-align: left;

    & > p {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    & > span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const ProfileSection = styled.section`
  padding: 110px 0 0;
`;

export const ModifyBtn = styled.button`
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.color.gray.g5};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

export const ProfileLi = styled.li`
  padding: 16px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g5};
`;

export const ModalTit = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;

  &:last-of-type {
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;
    margin: 10px 0 12px;
  }
`;

export const ChangeSection = styled.section`
  padding: 150px 40px;
  text-align: left;

  & > button {
    width: 80%;
    min-width: 350px;
    max-width: 500px;
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const NameLabel = styled.label`
  font-size: 14px;
  display: block;
  font-weight: 600;
`;

export const NameInput = styled.input`
  border: none;
  font-size: 16px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g1};
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: 14px 6px;
  margin: 16px 0;
`;

export const PwLabel = styled.label`
  font-size: 16px;
  display: block;
  font-weight: 400;
`;

export const PwInput = styled.input`
  border-radius: 5px;
  padding: 14px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.gray.g1};
  margin-top: 12px;

  &:first-of-type {
    margin-bottom: 24px;
  }
`;

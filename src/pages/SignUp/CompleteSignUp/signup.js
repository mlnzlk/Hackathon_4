import Logo from "../../../assets/logo.png";
import Button from "../../../module/Button";
import { Link } from "react-router-dom";
import "./App.css";

const ComSignup = () => {
  return (
    <section className="complete_ComSignup">
      <img src={Logo} alt="" className="logoImg" />
      <p className="ComSignup">회원가입 완료</p>
      <p className="a">친구들과 대화를 통해 필요한 정보를 찾아보세요.</p>
      <Link to="/login">
        <Button
          text="로그인하기"
          className="main"
          padding="17px 58px"
          fontSize="18px"
          borderRadius="30px"
        />
      </Link>
    </section>
  );
};

export default ComSignup;

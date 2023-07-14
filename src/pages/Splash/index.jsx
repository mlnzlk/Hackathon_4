import * as S from "./style"
import Logo from "../../assets/logo-white.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 1500); 

    return () => clearTimeout(timer); 
  }, [navigate]);


  return (
    <S.Section>
      <img src={Logo} alt="" />
      <p>서비스에 대한 간단한 소개 서비스에 대한 간단한 소개</p>
    </S.Section>
  )
}

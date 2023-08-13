import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTimetable from "../pages/AddTimetable";
import Chat from "../pages/Chat";
import ChatList from "../pages/ChatList";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ChangeName from "../pages/Profile/ChangeName";
import ChangePW from "../pages/Profile/ChangePW";
import SignUp from "../pages/SignUp";
import ComSignup from "../pages/SignUp/CompleteSignUp/signup";
import Splash from "../pages/Splash";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/timetable" element={<AddTimetable />} />
        <Route path='/complete' element={<ComSignup/>}/>
        <Route path="/list" element={<ChatList />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changename" element={<ChangeName />} />
        <Route path="/changepw" element={<ChangePW />} />
      </Routes>
    </BrowserRouter>
  );
}

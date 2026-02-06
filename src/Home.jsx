import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Chats from "./pages/Chats";

export default function Home() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
    
    </BrowserRouter>
    </>
  );
};
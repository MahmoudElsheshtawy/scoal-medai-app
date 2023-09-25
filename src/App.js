import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
  <>
  
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Profile" element={<Profile />}/>
    <Route path="/Register" element={<Register />}/>
  </Routes>
 
  </>
  )
}

export default App;

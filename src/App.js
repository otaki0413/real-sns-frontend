import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/ Login";
import { Register } from "./pages/regisiter/Register";
import { Profile } from "./pages/profile/Profile";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

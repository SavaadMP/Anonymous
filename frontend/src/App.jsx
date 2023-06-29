import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/user";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Welcome from "./pages/Welcome/Welcome";
import SendMessage from "./pages/SendMessage/SendMessage.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userDocs = await JSON.parse(localStorage.getItem("Anonymous"));
      if (userDocs) {
        dispatch(loginUser(userDocs));
      }
    };

    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sendMessage" element={<SendMessage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./redux/user";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Welcome from "./pages/Welcome/Welcome";
import SendMessage from "./pages/SendMessage/SendMessage.jsx";

const App = () => {
  const { user } = useSelector((state) => state.user);
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
        <Route
          index
          path="/"
          element={user ? <Home /> : <Navigate to="/welcome" />}
        />
        <Route
          path="/welcome"
          element={!user ? <Welcome /> : <Navigate to="/" />}
        />
        <Route path="/sendMessage" element={<SendMessage />} />

        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Welcome from "./pages/Welcome/Welcome";
import SendMessage from "./pages/SendMessage/SendMessage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/welcome" element={<Welcome/>}/>
                <Route index path="/sendMessage" element={<SendMessage/>}/>

                <Route index path="/register" element={<Register/>}/>
                <Route index path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <Routes>
                {/* Landing page */}
                <Route path="/" element={<Landing />}></Route>
                {/* Home Only Logged In Users */}
                <Route path="/home" element={<Home />}></Route>
                {/* Login + Signup pages */}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/*" element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
}

export default App;

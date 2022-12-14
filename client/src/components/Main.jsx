import { Route, Routes} from "react-router-dom";

/* Pages imports*/
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

function Main(){
    return(
    <>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
    </Routes>
    </>)
}

export default Main;
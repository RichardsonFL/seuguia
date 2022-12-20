import { Route, Routes} from "react-router-dom";

/* Pages imports*/
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Recover from "../pages/recover/solicitar"

function Main(){
    return(
    <>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/recover" element= {<Recover />}/>
    </Routes>
    </>)
}

export default Main;
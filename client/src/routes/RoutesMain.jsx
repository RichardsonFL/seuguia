import { useState } from "react";
import { Route, Routes} from "react-router-dom";

import ProtectedRoute from "../ProtectRoutes";
import User from "../pages/User";
/* Pages imports*/
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import ProfileSettings from "../pages/profile/ProfileSettings";
import RoutesSettings from "./RoutesSettings";
import Settings from "../pages/account/Settings";

//import "./Main.css";


function RoutesMain(){
    const [user, setUser] = useState(true);
    return(
    <Routes>
	<Route index path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route  element={<ProtectedRoute user={user} />}>
            {/* Coloque as rotas protegidas aqui */}
            <Route path="/account" element={<Settings/>}>
                <Route path="*" element={<RoutesSettings/>} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="profile" element={<ProfileSettings/>}/>
        </Route>
    </Routes>
    )
}

export default RoutesMain;
import { useState } from "react";
import { Outlet, Route, Routes} from "react-router-dom";

import ProtectedRoute from "../../ProtectRoutes";
import User from "../../pages/User";
/* Pages imports*/
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";
import ProfileSettings from "../../pages/profile/ProfileSettings";
import Settings from "../../pages/account/Settings";

import "./Main.css";
import SettingsRoutes from "../../routes/SettingsRoutes";

function Main(){
    const [user, setUser] = useState(true);
    return(
    <>
    <Routes>
        <Route index path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route  element={<ProtectedRoute user={user} />}>
                {/* Coloque as rotas protegidas aqui */}
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route element={<User />}>
                    <Route path="/profile-settings" element={<ProfileSettings/>}/>        
                </Route>
                <Route path="settings" element={<Settings />}>
                    <Route  path="*" element={<SettingsRoutes/>}/>
                </Route>
            </Route>
    </Routes>
    </>)
}

export default Main;
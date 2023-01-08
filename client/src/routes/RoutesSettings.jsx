import { Route, Routes } from "react-router-dom";

// Imports Sections
import BasicInfo from "../pages/account/sections/BasicInfo/BasicInfo";
import LegalInfo from "../pages/account/sections/LegalInfo/LegalInfo";
import Security from "../pages/account/sections/Security/Security";
import Privacy from "../pages/account/sections/Privacy/Privacy";

function SettingsRoutes(){
    return(
        <Routes>
            <Route path="basic-info" element={<BasicInfo/>}/>
            <Route path="legal-info" element={<LegalInfo />}/>
            <Route path="security" element={<Security />}/>
            <Route path="privacy-and-notify" element={<Privacy />}/>
        </Routes>
    )
}

export default SettingsRoutes;
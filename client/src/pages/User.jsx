import { Link, Outlet } from "react-router-dom";
import SettingsRoutes from "../routes/RoutesSettings";
import Settings from "./account/Settings";
import ProfileSettings from "./profile/ProfileSettings";

function User(){
    return(
        <>
        <nav>
            <Link to="profile">Edit perfil</Link>
            <Link to="account">Configurações da Conta</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default User;
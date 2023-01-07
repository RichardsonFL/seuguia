import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/banner_2.svg";


function Header({children}){
    return(
        <div className="header-form">
            <Link to="/">
                <img id="logo" src={Logo} alt="Seuguia Logo"/>
            </Link>
            <p>{children}</p>
        </div>
    )
}

export default Header;
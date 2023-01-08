import {NavLink} from "react-router-dom";

function SideMenu(){
    return(
        <nav>
            <ul className="nav-profile nav">
                <li className="nav-item">
                    <NavLink to="basic-info" className="nav-link">Informações Básicas</NavLink>
                </li>
		        <li className="nav-item">
                    <NavLink to="legal-info" className="nav-link">Informações Legais</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="security" className="nav-link">Segurança</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="privacy-and-Notify" className="nav-link">Notificação e Privacidade</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">Not Yet</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideMenu;
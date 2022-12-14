import { useState } from "react";
import { Link } from "react-router-dom";

import UserProfilePhote from "../../../../assets/images/DefaultPhoto.png";

import "./styles/DropDownMenu.css";

function DropDownMenu(){
    const [display, setDisplay] = useState("none")
    const toggle = () => display === 'none'? setDisplay("block") : setDisplay('none')
    
    return(
        <div className="DropDownMenu">
            <div className="toggle" onClick={() => setTimeout(toggle, 300)}> 
                <img src={UserProfilePhote} alt="user name."/>
            </div>
            <div className="drop-down" style={{"display": display}}>
                <div className="img-user">
                    <Link>
                        <img src={UserProfilePhote} alt="user name."/>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/posts">Postar Passeios</Link>
                    <Link to="/profile">Editar Perfil</Link>
                    <Link to="/profile-settings">Configurações</Link>
                    <div>
                        {/* Reservaado para um o botão Sair */}
                    </div>
                </nav>
            </div>
        </div>
        )
}

export default DropDownMenu;
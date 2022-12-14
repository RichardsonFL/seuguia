import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'

function NavMenu(){
    const [user, setUser] = useState(false)
    const  DotMenu = () => {
        return(
            <div className="dot-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )};

    if(!user){
        return(
            <nav className="nav-links list-items">
                <Link to="/">Quem Somos</Link>
                <Link to="sign-up">Cadastre-se</Link>
                <Link to="login">Faça Login</Link>
                <DotMenu />
            </nav>
        )
    }
    return(
        <>
        <DropDownMenu />
        </>
    )
}

export default NavMenu; 

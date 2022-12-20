import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../../assets/logo/atuallight351x93.png";
import {FlexWrap} from "../Containers";
import NavMenu from "./header-extra/NavMenu";

import './header-extra/styles/Header.css';

function Header(){
    return (  
        <header>  
            <FlexWrap className="FlexMaxWidth">
                <div className="area-logo">
                    <Link to="/">
                        <img src={Logo} alt="Seu guia logo" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <NavMenu />
                </div>
            </FlexWrap>
        </header>
    )
}

export default Header;
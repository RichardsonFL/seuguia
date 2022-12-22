import { useState } from "react";
import SearchIconPNG from "../../assets/icons/search-3-32.png";
import "./SearchIcon.css";

function SearchIcon() {
    const [display, setDisplay] = useState("none")
    const toggle = () => display === 'none'? setDisplay("block") : setDisplay('none')
    
    const InputSearch = {
        backgroundImage: `url(${SearchIconPNG})`,
        backgroundPosition: "10px 10px",
        backgroundRepeat: "no-repeat"
    }

    return(
        <div className="DropDownMenu">
            <div className="toggle" onClick={() => setTimeout(toggle, 300)}> 
                <img src={SearchIconPNG} alt="Search."/>
            </div>
            <div className="drop-search" style={{"display": display}}>
                <form>
                    <input style={InputSearch} type="text" name="search" placeholder="Search.."/>
                </form>
            </div>
        </div>
        )
}

export default SearchIcon;
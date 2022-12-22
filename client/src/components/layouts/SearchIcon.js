import { useState } from "react";
import SearchIconPNG from "../../assets/icons/search-3-32.png";
import "./SearchIcon.css";

function SearchIcon() {
    const [display, setDisplay] = useState("none")
    const toggle = () => display === 'none'? setDisplay("block") : setDisplay('none')
    
    const InputSearch = {
        backgroundImage: `url(${SearchIconPNG})`,
        backgroundPosition: "10px center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "18px"
    }

    return(
        <div className="DropDropSearchInput">
            <div className="toggleInputSearch" onClick={() => setTimeout(toggle, 300)}> 
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
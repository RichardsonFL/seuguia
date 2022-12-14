import {Link} from "react-router-dom";
import "./styles.css";

function ButtonLink({to, className, children}){
    return <Link className={className} to={to}>{children}</Link>
}

export default ButtonLink;
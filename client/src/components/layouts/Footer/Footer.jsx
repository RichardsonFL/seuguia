import { FlexWrap } from "../Containers";
import "./Footer.css";
function Footer(){
    return(
        <footer >
            <FlexWrap className="FlexMaxWidth">
                <p>&copy;2021 CSS Flexbox</p>
                <p>Desenvolvido por: Richardson Florencio</p>
            </FlexWrap>
        </footer>
    )
}
export default Footer;
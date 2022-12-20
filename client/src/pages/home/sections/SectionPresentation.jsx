
import Img from "../../../assets/images/about2.jpg";
import ButtonLink from "../../../components/layouts/Buttons/ButtonLink";
import { FlexWrap, MediumWrap } from "../../../components/layouts/Containers";
import Banner from "../../../assets/logo/banner_2.svg";
import "./styles/SectionPresentation.css";

function SectionPresentation(){
    return(
        <FlexWrap className="FlexMaxWidth presentation">
            <div className="text-presentation">
                <h1>
                    <img src={Banner} alt="banner"/>                 
                </h1>
                <p>O melhor serviço para você!</p>
                <ButtonLink to="/" className="btn-link-1">Saiba Mais!</ButtonLink>
            </div>
            <MediumWrap className="images">
                <img src={Img} alt="banner de apresentação" />
            </MediumWrap>
        </FlexWrap>
    )
}
export default SectionPresentation;
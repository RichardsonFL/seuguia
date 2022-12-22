
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
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <ButtonLink to="/" className="btn-link-1">Saiba Mais!</ButtonLink>
            </div>
            <MediumWrap className="images">
                <img src={Img} alt="banner de apresentação" />
            </MediumWrap>
        </FlexWrap>
    )
}
export default SectionPresentation;

import { FlexWrap } from "../../../components/layouts/Containers";
import ButtonLink from "../../../components/layouts/Buttons/ButtonLink";

//icons png
import Guides from "../../../assets/icons/local-guides.png";
import Tourist from "../../../assets/icons/largest-community.png";
import Traveler from "../../../assets/icons/trip-itneries.png";

import "./styles/SectionService.css";

function SectionService(){
    return(
        <section>
            <div className="container-wrap">
                <FlexWrap id="services" className="FlexMaxWidth">
                    <div>
                        <h2>Para quem é este portal</h2>
                    </div>
                    <FlexWrap>
                        <div>
                            <div>
                                <img src={Guides} alt="hospedagens"/>
                            </div>
                            <p>Você é um guia?</p>
                            <ButtonLink className="btn-link-2" to="#">Saiba mais</ButtonLink>
                        </div>
                        <div>
                            <div>
                                <img src={Tourist} alt="pacote de viagens"/>
                            </div>
                            <p>Você é Turista?</p>
                            <ButtonLink className="btn-link-2" to="#">Saiba mais!</ButtonLink>
                        </div>
                        <div>
                            <div>
                                <img src={Traveler} alt="roteiros"/>
                            </div>
                            <p>És um Viajante?</p>
                            <ButtonLink className="btn-link-2" to="#">Saiba mais!</ButtonLink>
                        </div>
                    </FlexWrap>
                </FlexWrap>
            </div>
        </section>
    )
}

export default SectionService
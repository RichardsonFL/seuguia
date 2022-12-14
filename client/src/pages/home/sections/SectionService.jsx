
import { FlexWrap } from "../../../components/layouts/Containers";
import ButtonLink from "../../../components/layouts/Buttons/ButtonLink";

import "./styles/SectionService.css";

function SectionService(){
    return(
        <section>
            <div className="container-wrap">
                <FlexWrap id="services" className="FlexMaxWidth">
                    <div>
                        <h2>Serviços</h2>
                    </div>
                    <FlexWrap className="FlexMaxWidth">
                        <div>
                            <div>
                                <img src="./images/icon-2.png" alt="hospedagens"/>
                            </div>
                            <p>Hospedagens</p>
                            <ButtonLink className="btn-link-2" to="#">Comprar Agora</ButtonLink>
                        </div>
                        <div>
                            <div>
                                <img src="./images/icon-1.png" alt="pacote de viagens"/>
                            </div>
                            <p>Pacotes de viagens</p>
                            <ButtonLink className="btn-link-2" to="#">Comprar Agora</ButtonLink>
                        </div>
                        <div>
                            <div>
                                <img src="./images/icon-3.png" alt="roteiros personalizados"/>
                            </div>
                            <p>Roteiros personalizados</p>
                            <ButtonLink className="btn-link-2" to="#">Comprar Agora</ButtonLink>
                        </div>
                    </FlexWrap>
                </FlexWrap>
            </div>
        </section>
    )
}

export default SectionService
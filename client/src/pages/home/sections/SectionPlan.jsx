import { Link } from "react-router-dom";
import { FlexWrap } from "../../../components/layouts/Containers";
import ButtonLink from "../../../components/layouts/Buttons/ButtonLink";

import "./styles/SectionPlan.css";

function SectionPlan(){

    return(
        <section>
                <FlexWrap id="plan" className="FlexMaxWidth">
                    <div>
                        <h2>Planos</h2>
                    </div>
                    <FlexWrap className="FlexMaxWidth">
                        <div className="item-plan">
                            <div>
                                <h3>Plano 1</h3>
                            </div>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                            </ul>
                            <ButtonLink className="btn-link-1" to="#">Saiba Mais!</ButtonLink>
                        </div>
                        <div className="item-plan">
                            <h3>Plano 2</h3>
                            <br/>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                                <li>Roteiro de trilhas</li>
                            </ul>
                            <ButtonLink className="btn-link-1" to="#">Saiba Mais!</ButtonLink>
                        </div>
                        <div className="item-plan">
                            <h3>Plano 3</h3>
                            <br/>
                            <br/>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                                <li>Roteiro de trilhas</li>
                                <li>Serviço personalizado</li>
                                <li>Área Vip</li>
                            </ul>
                            <br/>
                            <ButtonLink className="btn-link-1" to="#">Saiba Mais!</ButtonLink>
                        </div>
                    </FlexWrap>
                </FlexWrap>
            </section>
    )
}

export default SectionPlan;
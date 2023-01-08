import { FlexWrap, LargeWrap, MediumWrap, SmallWrap } from "../../../../components/layouts/Containers";
import Button from "../../../../components/layouts/Buttons/Button";

function LegalInfo(){
    return(
        <div id="legalInfo" className="tab-content">
            {/* <!-- TODO:  Acrescentar mais campos para informacoes legais!!--> */}
            <div className="tab-panel">
                <form className="f" method="post">
                    <FlexWrap>
                        <LargeWrap>
                            <FlexWrap>
                                <LargeWrap>
                                    <div className="form-group">
                                        <label htmlFor="address">Endereço</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            placeholder="Rua, Bairro, Cidade, UF"
                                            />
                                    </div>
                                </LargeWrap>
                            </FlexWrap>
                            <FlexWrap>
                                <MediumWrap>
                                    {/* <!-- Divide in two column--> */}
                                    <div className="form-group">
                                        <label htmlFor="cpf">CPF</label>
                                        <input
                                            type="text"
                                            id="cpf"
                                            name="cpf"
                                            placeholder="xxx.xxx.xxx-xx"
                                            />
                                    </div>
                                </MediumWrap>
                                <MediumWrap>
                                    <div className="form-group">
                                        {/* <!-- TODO: EDIT AFTER:
                                                PUT MASK AND ANOTHER --> */}
                                        <label htmlFor="crg">CRG</label>
                                        <input
                                            type="text"
                                            id="crg"
                                            name="crg"
                                            placeholder="N° Carteira regional de Guia"/>
                                    </div>
                                </MediumWrap>
                            </FlexWrap>
                        </LargeWrap>
                    </FlexWrap>
                    <FlexWrap className="form-btn">
                        <SmallWrap>
                            <Button className="btn btn-submit">Salvar</Button>
                        </SmallWrap>
                        <SmallWrap>
                            <Button className="btn btn-cancel">Cancelar</Button>
                        </SmallWrap>
                    </FlexWrap>
                </form>
            </div>
        </div>
    )
}

export default LegalInfo;
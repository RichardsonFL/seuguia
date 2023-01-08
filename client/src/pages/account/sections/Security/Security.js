import { FlexWrap, SmallWrap } from "../../../../components/layouts/Containers";
import Button from "../../../../components/layouts/Buttons/Button";

function Security(){
    return(
        <div id="security" className="tab-content">
            <div className="tab-panel">
                <form>
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
export default Security;
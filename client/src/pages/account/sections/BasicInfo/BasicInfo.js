import { FlexWrap, LargeWrap, MediumWrap, SmallWrap } from "../../../../components/layouts/Containers";
import { FormGroup } from "../../../../components/layouts/Forms/FormGroup";
import Button from "../../../../components/layouts/Buttons/Button";
import { InputWidget } from "../forms/FormWidget";
import fields from "./form-data.json";

function BasicInfo(){
    return(
        <div id="basicInfo" className="tab-content">
            <div className="tab-panel">
                <form className="f" onSubmit={() => console.log("Form Basic Info")}>
            <FlexWrap>
                <LargeWrap>
                    <InputWidget data={fields["field_001"]} parent={LargeWrap}/>
                    <InputWidget data={fields["field_002"]} parent={MediumWrap}/>
                    <FlexWrap>
                        <MediumWrap>
                            <FormGroup {...fields.field_003[0]} onChange={() => 45}/>
                        </MediumWrap>
                        <MediumWrap>
                            <div className="form-group">
                                {/* <!-- EDIT AFTER iNSERT A LIST OPTIONS --> */}
                                <label htmlFor="gender">Gênero</label>
                                <input type="text" id="gender" name="gender" />
                            </div>
                        </MediumWrap>
                    </FlexWrap>
                    <InputWidget data={fields["field_004"]} parent={MediumWrap}/>
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

export default BasicInfo;
import { FormGroup } from "../../../../components/layouts/Forms/FormGroup";
import {FlexWrap } from "../../../../components/layouts/Containers";


//const Parent = ({children}) => <LargeWrap>{children}</LargeWrap>;

export const FormWidget = (props) => {
    const { className, handleSubmit, children } = props;
    return(
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export const InputWidget = (props) => {
const inputs = props.data;
const onChange = props.onChange;
const Parent = props.parent;
    return(
        <FlexWrap>
            {inputs.map((item, key) => <Parent key={key}><FormGroup {...item} onChange={onChange}/></Parent>)}
        </FlexWrap>
    )
}

export default FormWidget;
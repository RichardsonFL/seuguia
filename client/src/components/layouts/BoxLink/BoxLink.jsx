import {LargeWrap, FlexWrap, MediumWrap} from "../Containers";
function BoxLinks(props) {
    const {path, text} = props;
    return(
        <LargeWrap>
            <FlexWrap className="box-link">
                {<Link to={path}>{text}</Link>}
            </FlexWrap>
        </LargeWrap>
    )
}
export default BoxLinks;
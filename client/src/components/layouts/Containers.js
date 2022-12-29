import './styles/ContainerStyles.css';

function setter({id, className, children}, defaultClass){
    let cls = !className ? defaultClass : defaultClass.concat("\x20" + className);
    return (
        <div id={id}  className={cls}>
            {children}
        </div>
    )
}

export const FlexMaxWitdth = props => setter(props, "FlexMaxWitdth");
export const FlexWrap = props => setter(props, "FlexWrap");
export const LargeWrap = props => setter(props, "LargeWrap");
export const ThreeQWrap = props => setter(props, "ThreeQWrap");
export const MediumWrap = props => setter(props, "MediumWrap");
export const SmallWrap = props => setter(props, "SmallWrap");

/*************** Helper ***********************************
 * FlexWrap ==> Flexbox - with wrap by default instead of nowrap;
 * LargeWrap  ==>  Container with max-width of 100% of your parent container;
 * ThreeQWrap ==>  3 quarter of width (70%);
 * MediumWrap ==>  1/2 of width (50%);
 * SmallWrap  ==>  1/4 of width (25%).
***********************************************************/
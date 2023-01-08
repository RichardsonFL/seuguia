import { Outlet } from "react-router-dom";
import { FlexWrap, FlexMaxWidth,  LargeWrap,SmallWrap, ThreeQWrap} from "../../components/layouts/Containers";
import SideMenu from "./sections/SideMenu/SideMenu";

import "./styles.css";

function Settings(){
    return(
        <main ><FlexMaxWidth>
        <LargeWrap >
            
                <FlexWrap>
                    <SmallWrap className="side">
                        <SideMenu />
                    </SmallWrap>
                    <ThreeQWrap>
                        <Outlet />
                    </ThreeQWrap>
                </FlexWrap>
            
        </LargeWrap></FlexMaxWidth>
        </main>
    )
}

export default Settings;
import SectionAbout from "./sections/About";
import SectionPlan from "./sections/SectionPlan";
import SectionPresentation from "./sections/SectionPresentation";
import SectionService from "./sections/SectionService";

import "./home.css";

function Home(){
    return(
        <main>
            <SectionPresentation />            
            <SectionAbout />            
            <SectionService />            
            <SectionPlan />
        </main>
    )
}

export default Home;
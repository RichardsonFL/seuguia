import SectionAbout from "./sections/About";
import SectionPlan from "./sections/SectionPlan";
import SectionPresentation from "./sections/SectionPresentation";
import SectionService from "./sections/SectionService";

import "./home.css";

function Home(){
    return(
        <main>
            {/* Presentation Section */}
            
            <SectionPresentation />
            {/* End aqui */}
            {/* About Section */}
            
            <SectionAbout />
            {/* End aqui */}
            
            {/* Service Section */}
            
            <SectionService />
            {/* End aqui */}

            {/* Plan Section */}
            
            <SectionPlan />
            {/* ... */}
        </main>
    )
}

export default Home;
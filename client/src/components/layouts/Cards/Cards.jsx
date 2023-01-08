
import "./Cards.css";

function Cards({children}){
    return(
        <div className="cards-container">
            {children}
        </div>
    )
}
export default Cards;
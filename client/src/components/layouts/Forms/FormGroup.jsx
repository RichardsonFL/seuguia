
import "./styles.css/forms.css";
export const FormGroup = function(props){
    return(
    <div className="form-group">
        <label htmlFor={props.id}>{props.text}</label>
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder} 
            required={props.required}
            />
    </div>
    )
}
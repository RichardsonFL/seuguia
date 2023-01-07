
import "./styles.css/forms.css";
export const FormGroup = function(props){
    const {text, id, onChange, ...otherProps} = props;
    return(
    <div className="form-group">
        <label htmlFor={id}>{text}</label>
        <input
            id={id}
            onChange={onChange}
            {...otherProps}
            />
    </div>
    )
}
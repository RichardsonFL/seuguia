import { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";
import Logo from "../../assets/logo/banner_2.svg";
import "./SignUp.css";
import FormField from "./form-data.json";

function SignUp(props){
    const { FormGropProps } = FormField;
    const[values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleSubmit(e){
        e.preventDefault()
        return alert('Login has no implementaton yet!')
    }

    function onChange(e){
        setValues({...values, [e.target.name]: e.target.value})
	    console.log(values)
    }
    
    return(
        <main>
        <LargeWrap>    
            <FlexWrap className="login-container">
                <MediumWrap className="login-area">
                    <div className="header-form">
                        <Link to="/">
                        <img id="logo" src={Logo} alt="Seuguia Logo"/>
                        </Link>
                        
                        <p>Faça seu cadastro!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {FormGropProps.map(
                            (item, idx) => <FormGroup key={idx} {...item} onChange={onChange} value={values[item.name]}/>
                            )}
                        <LargeWrap>
                            <FlexWrap className="form-btn">
                                <div>
                                    <input type="submit" className="btn btn-submit" value="Cadastre-se"/>
                                </div>
                            </FlexWrap>
                        </LargeWrap>
                    </form>
                    <LargeWrap>
                        <FlexWrap className="box-link">
                            <Link to="/login">Já possui uma conta?</Link>
                        </FlexWrap>
                    </LargeWrap>
                </MediumWrap>
            </FlexWrap>
        </LargeWrap>
        </main>
    )
}

export default SignUp;
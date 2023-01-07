import { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";
import Header from "../../components/layouts/SubHeader/Header";
import "./recover.css";
import FormField from "./form-data.json";

function Login(props){
    const { FormGropProps } = FormField;
    const[values, setValues] = useState({
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
                    <Header>Recupere sua senha</Header>
                    <form onSubmit={handleSubmit}>
                        {FormGropProps.map(
                            (item, idx) => <FormGroup key={idx} {...item} onChange={onChange} value={values[item.name]}/>
                            )}
                        <LargeWrap>
                            <FlexWrap className="form-btn">
                                <div>
                                    <input type="submit" className="btn btn-submit" value="Entrar"/>
                                </div>
                            </FlexWrap>
                        </LargeWrap>
                    </form>
                    <LargeWrap>
                        <FlexWrap className="box-link">
                            <Link to="/login">Lembrou sua minha senha?</Link>
                            <Link to="/sign-up">Ainda não é cadastrado?</Link>
                        </FlexWrap>
                    </LargeWrap>
                </MediumWrap>
            </FlexWrap>
        </LargeWrap>
        </main>
    )
}

export default Login;
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";
import Header from "../../components/layouts/SubHeader/Header";
import "./login.css";
import FormField from "./form-data.json";

function Login(props){
    const { FormGropProps } = FormField;
    const[values, setValues] = useState({
        email: "",
        password: ""
    });
    
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()))
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
                    <Header>Faça seu login.</Header>
                    <form onSubmit={handleSubmit}>
                        {FormGropProps.map(
                            (item, idx) => <FormGroup key={idx} {...item} onChange={onChange} value={values[item.name]}/>
                            )
                        }
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
                            <Link to="/solicitar">Esqueci minha senha</Link>
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
import { Link } from "react-router-dom";

import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";

import "./login.css";

function Login(props){
    function handleSubmit(e){
        e.preventDefault()
        return alert('Login has no implementaton yet!')
    }
    return(
        <main>
        <LargeWrap>    
            <FlexWrap className="login-container">
                <MediumWrap className="login-area">
                    <div className="header-form">
                        <Link to="/">
                        {/* <img id="logo" src={logo} alt="Seuguia Logo"/> */}
                        </Link>
                        <p>Bem Vindo</p>
                        <p>Faça seu login</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <FormGroup
                            type="email"
                            text="E-mail"
                            id="email"
                            name="email"
                            value=""
                            placeholder="email@exemple.com"
                            required
                        />
                        <FormGroup
                            type="password"
                            text="Senha"
                            id="password"
                            name="password"
                            value=""
                            placeholder="Sua senha..."
                            required
                        />
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
                            <Link to="../sign-up">Esqueci minha senha</Link>
                            <Link to="../sign-up">Ainda não é cadastrado?</Link>
                        </FlexWrap>
                    </LargeWrap>
                </MediumWrap>
            </FlexWrap>
        </LargeWrap>
        </main>
    )
}

export default Login;
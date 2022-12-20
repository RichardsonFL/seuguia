import { Link } from "react-router-dom";
import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";
import Logo from "../../assets/logo/banner_2.svg";
import "./SignUp.css";

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
                        <img id="logo" src={Logo} alt="Seuguia Logo"/>
                        </Link>
                        
                        <p>Faça seu cadastro!</p>
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

                        <FormGroup
                            type="password"
                            text="Repita sua senha"
                            id="confirmePassword"
                            name="confirmPassword"
                            value=""
                            placeholder="Repita sua senha..."
                            required
                        />
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
                            <Link to="../login">Já possui uma conta?</Link>
                        </FlexWrap>
                    </LargeWrap>
                </MediumWrap>
            </FlexWrap>
        </LargeWrap>
        </main>
    )
}

export default Login;
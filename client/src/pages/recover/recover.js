import { Link } from "react-router-dom";
import { FormGroup } from "../../components/layouts/Forms/FormGroup";
import {LargeWrap, FlexWrap, MediumWrap} from "../../components/layouts/Containers";
import Logo from "../../assets/logo/banner_2.svg";
import "./recover.css";

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
                        
                        <p>Recupere sua senha</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <FormGroup
                            type="password"
                            text="Insira nova senha"
                            id="newPassword"
                            name="newPassword"
                            value=""
                            placeholder="Nova Senha"
                            required
                        />
                        <FormGroup
                            type="password"
                            text="Confirme sua senha"
                            id="confirmPassword"
                            name="conformPassword"
                            value=""
                            placeholder="Confirme sua senha"
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
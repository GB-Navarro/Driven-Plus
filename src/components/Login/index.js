import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function getAcess(){
       const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";

       let user = {
           email:email,
           password:password
       }

       const promisse = axios.post(URL, user);
       promisse.then((response) => {
            console.log(response);
            navigate("/subscriptions")
       })
       promisse.catch((err) => {
            console.log("Deu Xabu!");
       }) 
    }
    return(
        <>
            <LoginSection>
                    <LoginContainer>
                    <Logo>
                        <LogoText>Driven</LogoText>
                        <LogoIcon>+</LogoIcon>
                    </Logo>
                    <Main>
                        <InputsContainer>
                            <input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                            <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </InputsContainer>
                        <button onClick={getAcess}>Entrar</button>
                        <TextBox>
                            <Link to="/sign-up">
                                <p>Não tem uma conta? Cadastre-se</p>
                            </Link>
                        </TextBox>
                    </Main>
                </LoginContainer>
            </LoginSection>
        </>
    )
}
const LoginContainer = styled.div`
    width:100vw;
    height: 100vh;
    background-color:#0E0E13;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const LoginSection = styled.section`
    font-family: 'Roboto', sans-serif;
    width:90%;
    height:90%;
`
const Logo = styled.div`
    margin: 134px 0px 100px 0px;
`
const LogoText = styled.span`
    color:#ffffff;
    font-size:49px;
`
const LogoIcon = styled.span`
    color:#ff4791;
    font-size:49px;
`
const Main = styled.main`
    button{
        background-color:#FF4791;
        border-radius: 5px;
        border: 1px solid #FF4791;
        width:85vw;
        height: 7vh;
        font-size:14px;
        font-weight: 700;
        color: #FFFFFF;
    }
`
const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:85vw;
    
    input{
        border-radius: 5px;
        border: 1px solid #ffffff;
        height: 7vh;
        margin-bottom:16px;
        font-size:14px;
        font-weight: 400;
        padding-left:14px;
        color:#7E7E7E;
    }
`
const TextBox = styled.div`
    display:flex;
    justify-content: center;

    p{
        font-size:14px;
        font-weight: 400;
        color: #FFFFFF;
        margin-top:24px;
    }
`
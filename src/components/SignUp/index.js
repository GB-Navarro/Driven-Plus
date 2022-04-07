import styled from "styled-components"
import axios from "axios";
import { useState  } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SingUp(){
    
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function register(){
        
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        let user = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        };
        const promisse = axios.post(URL, user);
        promisse.then((response) => {
            navigate("/")
        })
        promisse.catch((err) => {
            console.log("Deu xabu no cadastro!");
        })
    }
    

    
    
    return(
        <>
            <RegisterSection>
                <Container>
                    <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                    <input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={register}>Cadastrar</button>
                    <TextBox>
                        <Link to="/">
                            <p>Já possui uma conta? Entre</p>
                        </Link>
                    </TextBox>
                </Container>
            </RegisterSection>
        </>
    )
}

const RegisterSection = styled.section`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    background-color:#0E0E13;
    font-family: 'Roboto', sans-serif;
`
const Container = styled.div`
    width: 85%;
    height: 85%;
    display:flex;
    flex-direction: column;
    margin-top:147px;

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
const TextBox = styled.div`
    display:flex;
    justify-content: center;
    color: #FFFFFF;
    font-weight: 400;
    margin-top:24px;
`
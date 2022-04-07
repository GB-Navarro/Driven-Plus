import styled from "styled-components";
import { useContext } from "react";
import TokenContext from "../../Contexts/TokenContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscriptions(){

    const {token} = useContext(TokenContext);
    const [elements, setElements] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function subscribe(){
            const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            
            const promisse = axios.get(URL,config);
            promisse.then((response) => {
                setElements(response.data);
            })
            promisse.catch((err) => {
                console.log("Deu ruim xabu na subscrição!");
            })
    
        }
        subscribe();
    },[])
    
    
    return(
        <>
            <SubscriptionsSection>
                <SubscriptionsContainer>
                    <SubscriptionsHeader>
                        <p>Escolha seu plano</p>
                    </SubscriptionsHeader>
                    <SubscriptionsMain>
                        {
                            elements.length > 0 ? elements.map((element) => {
                                return(
                                    <>
                                        <div onClick={() => {
                                            navigate(`/subscription${element.id}`)
                                        }}>
                                            <Subscription src={element.image} price={element.price} key={element.id}/>
                                        </div>
                                    </>
                                )
                            }) : <h1>Teste</h1>
                        }
                        
                    </SubscriptionsMain>
                </SubscriptionsContainer>
            </SubscriptionsSection>
        </>
    )
}
function Subscription(props){
    return(
        <>
            <SubscriptionsBox>
                <img src={props.src}/>
                <PriceBox>
                    <p>R${props.price}</p>
                </PriceBox>
            </SubscriptionsBox>
        </>
    )
}
const SubscriptionsSection = styled.section`
    width:100vw;
    height: 100vh;
    background-color:#0E0E13;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    display:flex;
    justify-content: center;
`
const SubscriptionsHeader = styled.header`
    display:flex;
    justify-content: center;
    margin:29px 0px 24px 0px;
    p{
        font-size: 32px;
        font-weight: 700;
    }
`
const SubscriptionsMain = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center; 
`
const SubscriptionsContainer = styled.div`
    width:85%;
    height:85%;
`
const SubscriptionsBox = styled.div`
    width:100%;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom:10px;
    display:flex;
    img{
        margin: 35px 10px 35px 10px;
        padding-right: 40px;
    }
`
const PriceBox = styled.div`
    display:flex;
    align-items: center;
    margin-right:16px;
    font-size:24px;
    font-weight: 700;
`
import styled from "styled-components";

export default function Subscriptions(){
    return(
        <>
            <SubscriptionsSection>
                <SubscriptionsHeader>
                    <ion-icon name="arrow-back-sharp"></ion-icon>
                </SubscriptionsHeader>
                <SubscriptionsMain>
                    <SubscriptionsMainTop>
                        <span>D+</span>
                        <p>Driven Plus</p>
                    </SubscriptionsMainTop>
                    <SubscriptionsMainMid>
                        <div>
                            <Box>
                                <span><ion-icon name="calendar-outline"></ion-icon></span>
                                <h1>Benefícios</h1>
                            </Box>
                            <p>1. Brindes exclusivos</p>
                            <p>2. Material bônus de web</p>
                        </div>
                        <div>
                            <Box>
                                <span><ion-icon name="cash-outline"></ion-icon></span>
                                <h1>Preços</h1>
                            </Box>
                            <p>R$ 39,99 cobrados mensalmente</p>
                        </div>
                    </SubscriptionsMainMid>
                    <SubscriptionsMainBottom>
                        <InputsContainerTop>
                            <input placeholder="Nome impresso no cartão" type="text"></input>
                            <input placeholder="Dígitos do cartão" type="text"></input>
                        </InputsContainerTop>
                        <InputsContainerBottom>
                            <span><input placeholder="Código de segurança" type="text"></input></span>
                            <input placeholder="Validade" type="text"></input>
                        </InputsContainerBottom>
                        <button>Assinar</button>
                    </SubscriptionsMainBottom>
                </SubscriptionsMain>
            </SubscriptionsSection>
            
        </>
    )
}
const SubscriptionsSection = styled.section`
    background-color: #0E0E13;
    width:100vw;
    height:100vh;
    font-family: 'Roboto', sans-serif;
`
const SubscriptionsHeader = styled.header`
    color: #FFFFFF;
    font-size:27px;
    padding: 20px 0px 0px 18px;
`
const SubscriptionsMain = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:35px;
`
const SubscriptionsMainTop = styled.div`
    color: #FFFFFF;
    margin-bottom:22px;
    span{
        font-size:72px;
    }
    p{
        font-size:32px;
        font-weight: 700;
    }
`
const SubscriptionsMainMid = styled.div`
    color: #FFFFFF;
    margin-bottom:34px;
    display:flex;
    flex-direction: column;
    align-items: flex-start; // NÃO FUNCIONA COMO DEVERIA
    div{
        margin-bottom:12px;
    }
`
const Box = styled.div`
    display:flex;
    span{
        color:#FF4791;
        margin-right: 5px;
    }
`
const SubscriptionsMainBottom = styled.div`
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
        width:100%;
        background-color:#FF4791;
        border-radius: 5px;
        border: 1px solid #FF4791;
        height: 7vh;
        font-size:14px;
        font-weight: 700;
        color: #FFFFFF;
    }
`
const InputsContainerTop = styled.div`
    display:flex;
    flex-direction: column;
`
const InputsContainerBottom = styled.div`
    input{
        width:35vw;
    }
    span{
        margin-right: 9px;;
    }
`
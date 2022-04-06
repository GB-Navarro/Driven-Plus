import styled from "styled-components";

export default function Subscriptions(){
    return(
        <>
            <SubscriptionsSection>
                <SubscriptionsContainer>
                    <SubscriptionsHeader>
                        <p>Escolha seu plano</p>
                    </SubscriptionsHeader>
                    <SubscriptionsMain>
                        <Box>
                            <img src="./../../assets/images/Branco.png" alt="Logo branca"/>
                            <span>+</span>
                            <p>R$ 39,99</p>
                        </Box>
                        <Box>
                            <img src="./../../assets/images/Amarelo.png" alt="Logo amarelo"/>
                            <span>+</span>
                            <p>R$ 69,99</p>
                        </Box>
                        <Box>
                            <img src="./../../assets/images/Verde.png" alt="Logo verde"/>
                            <span>+</span>
                            <p>R$ 99,99</p>
                        </Box>
                    </SubscriptionsMain>
                </SubscriptionsContainer>
            </SubscriptionsSection>
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
const Box = styled.div`
    width:100%;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-bottom:10px;
`
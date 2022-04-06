import styled from "styled-components";

export default function Home(){
    return(
        <>
            <HomeSection>
                <HomeHeader>
                    <LogoBox>
                        D
                    </LogoBox>
                    <IconBox>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </IconBox>
                    
                </HomeHeader>
                <TextBox>
                    <p>Olá, fulano</p>
                </TextBox>
                <HomeContainer>
                    <ButtonContainerTop>
                        <PinkButton>Solicitar brindes</PinkButton>
                        <PinkButton>Materiais bônus de web</PinkButton>
                        <PinkButton>Mudar plano</PinkButton>
                        <PinkButton>Cancelar plano</PinkButton>
                    </ButtonContainerTop>
                    <ButtonContainerBottom>
                        <PinkButton>Mudar Plano</PinkButton>
                        <RedButton>Cancelar Plano</RedButton>
                    </ButtonContainerBottom>
                </HomeContainer>
            </HomeSection>
        </>
    )
}
const HomeHeader = styled.header`
    display:flex;
    justify-content: space-between;
    padding-top:22px;
    margin-bottom:12px;
`
const IconBox = styled.div`
    color: #FFFFFF;
    font-size:32px;
    padding-right:22px;
`
const LogoBox = styled.div`
    font-size:72px;
    color: #FFFFFF;
    padding-top:7px;
    padding-left:38px;
`
const HomeSection = styled.section`
    width:100vw;
    height: 100vh;
    background-color:#0E0E13;
`
const HomeContainer = styled.div`
    width:85%;
    height:85%;
    margin:auto;
`
const TextBox = styled.div`
    display:flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size:24px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 53px;
`
const PinkButton = styled.button`
    background-color:#FF4791;
    border-radius: 5px;
    border: 1px solid #FF4791;
    height: 7vh;
    font-size:14px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom:8px;
`
const RedButton = styled.button`
    background-color:#FF4747;
    border-radius: 5px;
    border: 1px solid #FF4791;
    height: 7vh;
    font-size:14px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom:8px;
`
const ButtonContainerTop = styled.div`
    display:flex;
    flex-direction: column;
`
const ButtonContainerBottom = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:195px;
`


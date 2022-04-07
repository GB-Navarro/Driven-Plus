import SubscriptionID from "./SubscriptionID";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import TokenContext from "../../Contexts/TokenContext";

export default function Subscription1(){

    const {token} = useContext(TokenContext);
    const [elements, setElements] = useState([]);
    
    useEffect(() => {
        
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/1";
        
        const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
        }

        const promisse = axios.get(URL,config);
        promisse.then((response) => {
            setElements(response.data);
            console.log("A requisição funcionou");
        })
        promisse.catch((err) => {
            console.log("Deu xabu na hora de renderizar a página do plano!");
        })

    },[])
    
    return(
        <> 
            {
                elements.length > 0 ? 
                    elements.map((element) => {
                        return(
                            <>
                                <SubscriptionID src={element.image} name={element.name}/> 
                            </>
                        );
                    })
                : <></>
            }
                
        </>
    )
}
//
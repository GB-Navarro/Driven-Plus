import "./assets/styles/reset.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SubscritionID from "./components/Subscriptions/SubscriptionID";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./Contexts/TokenContext";

export default function App(){

    const [token, setToken] = useState("");

    return(
        <>
            <TokenContext.Provider value={{token, setToken}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/sign-up" element={<SignUp/>}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/subscriptionID" element={<SubscritionID />}></Route>
                        <Route path="/subscriptions" element={<Subscriptions />}></Route>
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </>
    )
}
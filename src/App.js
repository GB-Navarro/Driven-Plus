import "./assets/styles/reset.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import Subscription1 from "./components/Subscriptions/Subscription1";
import Subscription2 from "./components/Subscriptions/Subscription2";
import Subscription3 from "./components/Subscriptions/Subscription3";
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
                        <Route path="/subscriptions" element={<Subscriptions />}></Route>
                        <Route path="/subscription1" element={<Subscription1 />}></Route>
                        <Route path="/subscription2" element={<Subscription2 />}></Route>
                        <Route path="/subscription3" element={<Subscription3 />}></Route>
                    </Routes>
                </BrowserRouter>
            </TokenContext.Provider>
        </>
    )
}
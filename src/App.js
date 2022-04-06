import "./assets/styles/reset.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Subscritions from "./components/Subscriptions/Subscriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/subscriptions" element={<Subscritions />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
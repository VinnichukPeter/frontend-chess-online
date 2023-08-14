import React from 'react';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Authorization from "./pages/Authorization";
import SignIn from "./layouts/SignIn";
import SignUp from "./layouts/SignUp";
import Base from "./pages/Base";
import Home from "./layouts/Home";
import About from "./layouts/About";
import News from "./layouts/News";
import Game from "./layouts/Game";
import StartGame from "./layouts/StartGame";

function App() {
    return (
        <div className="Background">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Base/>}>
                        <Route path={"home"} element={<Home/>}/>
                        <Route path={"about"} element={<About/>}/>
                        <Route path={"news"} element={<News/>}/>
                        <Route path={"start-game"} element={<StartGame/>}/>
                        <Route path={"game"} element={<Game/>}/>

                        <Route path={""} element={<Navigate to={"/home"}/>}/>
                    </Route>

                    <Route path={"/authorization"} element={<Authorization/>}>
                        <Route path={"sign-in"} element={<SignIn/>}/>
                        <Route path={"sign-up"} element={<SignUp/>}/>

                        <Route path={""} element={<Navigate to={"/not-found"}/>}/>
                    </Route>

                    <Route path={"/not-found"} element={<NotFound/>}/>
                    <Route path={"/*"} element={<Navigate to={"/not-found"}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

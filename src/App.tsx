import React from 'react';
import './App.scss';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Authorization from "./pages/Authorization";
import SignIn from "./layouts/SignIn";
import SignUp from "./layouts/SignUp";

function App() {
    return (
        <div className="Background">
            <BrowserRouter>
                <Routes>

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

import "../styles/layouts/home.scss";
import React from 'react';
import ButtonLink from "../components/ButtonLink";
import Recommendation from "../components/Recommendation";

const Home = () => {
    return (
        <div className={"home"}>
            <div className={"game-block"}>
                <p>You plays game: 5</p>
                <p>You Win game: 2</p>
                <p>Games ended in a draw: 1</p>
                <p>You Lose game: 2</p>
                <ButtonLink value={"Play"}
                            url={sessionStorage.getItem('token') ? "/start-game" : "/authorization/sign-in"}/>
            </div>

            <div className={"recommendations-block"}>
                <div className={"recommendations"}>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                </div>

                <div className={"recommendations"}>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                    <Recommendation/>
                </div>
            </div>
        </div>
    );
};

export default Home;
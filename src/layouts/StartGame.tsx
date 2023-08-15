import "../styles/layouts/start-game.scss"
import React, {useEffect, useState} from 'react';
import Submit from "../components/Submit";
import {GameAPI} from "../api/GameAPI";

const StartGame = () => {
    const [gameTurn, setGameTurn] = useState(false);

    useEffect(() => {
        GameAPI.queue().then((result) => {
            if (result) {
                if(!gameTurn){
                    setGameTurn(true);
                }
            }
        });
    }, []);

    useEffect(() => {
        if (gameTurn) {
            const interval = setInterval(getStart, 1000);
            return () => {
                clearInterval(interval)
            }
        }
    }, [gameTurn]);

    async function getStart() {
        GameAPI.start().then((result) => {
            if (result) {
                setGameTurn(false);
                window.location.href = "/game";
            }
        })
    }

    function cancel() {
        console.log("======cansel");
        GameAPI.cancel().then((result) => {
            console.log("======result");

            if (result) {
                setGameTurn(false);
                window.location.href = "/home";
            }
        });
    }

    return (
        <div className={"start-game"}>
            <div className={"container"}>
                <span className={"loading"}>game loading...</span>
                <Submit value={"Cancel"} onClick={cancel}/>
            </div>
        </div>
    );
};

export default StartGame;
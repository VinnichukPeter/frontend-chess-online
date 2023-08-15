import "../styles/layouts/start-game.scss"
import React, {useEffect, useRef, useState} from 'react';
import Submit from "../components/Submit";
import {GameAPI} from "../api/GameAPI";

const StartGame = () => {
    let flagStart = useRef(false);
    let flagQueue = useRef(true);


    useEffect(() => {
        if (flagQueue) {
            flagQueue.current = false;
            GameAPI.queue().then((result) => {
                flagStart.current = result;
            });
        }

        if (flagStart) {
            const interval = setInterval(getStart, 1000);
            return () => {
                clearInterval(interval)
            }
        }
    }, []);

    async function getStart() {
        GameAPI.start().then((result) => {
            if (result) {
                window.location.href = "/game";
            }
        })
    }

    function cancel() {
        console.log("======cansel");
        GameAPI.cancel().then((result) => {
            console.log("======result");

            if (result) {
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
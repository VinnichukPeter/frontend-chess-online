import "../styles/layouts/start-game.scss"
import React, {useEffect, useRef} from 'react';
import Submit from "../components/Submit";
import {GameAPI} from "../api/GameAPI";

const StartGame = () => {
    let flagStart = useRef(false);
    let flagQueue = useRef(true);
    let token = sessionStorage.getItem('token');
    //let isCreatedLapStr = sessionStorage.getItem('isCreatedLap');
    if (token === null) { //|| isCreatedLapStr === null
        window.location.href = "/not-found";
    }

    useEffect(() => {
        const abortController = new AbortController();

        if (flagQueue) {
            flagQueue.current = false;
            GameAPI.queue(abortController.signal).then((result) => {
                flagStart.current = result;
            });
        }

        if (flagStart) {
            const interval = setInterval(getStart, 1000);
            return () => {
                clearInterval(interval)
            }
        }

        return () => {
            abortController.abort();
        }
    }, []);

    async function getStart() {
        GameAPI.check().then((result) => {
            if (result) {
                window.location.href = "/game";
            }
        })
    }

    function cancel() {
        GameAPI.cancel().then((result) => {
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
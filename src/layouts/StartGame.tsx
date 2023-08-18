import "../styles/layouts/start-game.scss"
import React, {useEffect, useRef} from 'react';
import Submit from "../components/Submit";
import {GameAPI} from "../api/GameAPI";

const StartGame = () => {
    let flagQueueSecond = useRef(true);
    let flagStart = useRef(false);
    let token = sessionStorage.getItem('token');
    if (token === null) {
        window.location.href = "/not-found";
    }

    useEffect(() => {
        flagQueueSecond.current = !flagQueueSecond.current;

        if (flagQueueSecond.current) {
            const abortController = new AbortController();

            GameAPI.queue(abortController.signal).then((result) => {
                if (result) {
                    const interval = setInterval(getStart, 1000);
                    return () => {
                        clearInterval(interval)
                    }
                }
            });
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
import "../styles/layouts/game.scss"
import React, {useEffect, useState} from 'react';
import ChessboardSide from "./ChessboardSide";
import Chessboard from "./Chessboard";
import ChessboardController from "../game/logic/ChessboardController";
import LapDTO from "../api/dto/LapDTO";
import {GameAPI} from "../api/GameAPI";

const Game = () => {
    const [lap, setLapDTO] = useState(new LapDTO());
    const [controller, setController] = useState(new ChessboardController(false));

    useEffect(() => {
        fetchLapData();
        restart();
    }, []);

    const fetchLapData = () => {
        GameAPI.getLap();
    }

    function restart() {
        const newController = new ChessboardController(controller.playerColor);
        newController.initCells();
        newController.startPositionPiece();
        setController(newController);
    }

    return (
        <div className={"game"}>
            <div className={"table"}>
                <ChessboardSide>
                    <Chessboard controller={controller} setController={setController}/>
                </ChessboardSide>
            </div>
        </div>
    );
};

export default Game;
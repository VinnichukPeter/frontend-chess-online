import "../styles/layouts/game.scss"
import React, {useEffect, useState} from 'react';
import ChessboardSide from "./ChessboardSide";
import Chessboard from "./Chessboard";
import ChessboardController from "../game/logic/ChessboardController";
import LapDTO from "../fetchApi/dto/LapDTO";

const Game = () => {
    const [lap, setLapDTO] = useState(new LapDTO());
    const [controller, setController] = useState(new ChessboardController(false));

    useEffect(() => {
        fetchLapData();
        restart();
    }, []);

    const fetchLapData = () => {
        /*fetch("http://localhost:8081/game/create")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setLapDTO(data);
            })*/
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
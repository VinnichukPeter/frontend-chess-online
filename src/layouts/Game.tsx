import "../styles/layouts/game.scss"
import React, {useEffect, useState} from 'react';
import ChessboardSide from "./ChessboardSide";
import Chessboard from "./Chessboard";
import ChessboardController from "../game/logic/ChessboardController";

const Game = () => {
    const [controller, setController] = useState(new ChessboardController());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newController = new ChessboardController();
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
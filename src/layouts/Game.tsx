import "../styles/layouts/game.scss"
import React, {useEffect, useState} from 'react';
import ChessboardSide from "./ChessboardSide";
import Chessboard from "./Chessboard";
import ChessboardController from "../game/logic/ChessboardController";
import {GameAPI} from "../api/GameAPI";
import pieceModel from "../game/models/PieceModel";

const Game = () => {
    const [controller, setController] = useState(new ChessboardController(true));

    useEffect(() => {
        fetchLapData();
        restart();
    }, []);

    const fetchLapData = () => {
        GameAPI.getLap().then(lapDTO => {
            console.log("get date :", lapDTO)
        });
    }

    function restart() {
        let regexPattern = new RegExp("true");
        let colorStr = sessionStorage.getItem('color');
        let color: boolean = regexPattern.test(!colorStr ? "" : colorStr);
        console.log(color, sessionStorage.getItem('color'));

        const newController = new ChessboardController(color);
        newController.initCells();
        newController.startPositionPiece();
        setController(newController);
    }

    function getEnemyPiece(): pieceModel[] {
        return controller.getInactivePieceByColor(!controller.playerColor);
    }

    function getAlliesPiece(): pieceModel[] {
        return controller.getInactivePieceByColor(controller.playerColor);
    }

    function getIcon(number: number, color: boolean) {
        if (color) {
            switch (number) {
                case 1:
                    return <>&#9817;</>;
                case 2:
                    return <>&#9815;</>;
                case 3:
                    return <>&#9816;</>;
                case 4:
                    return <>&#9814;</>;
                case 5:
                    return <>&#9813;</>;
                case 6:
                    return <>&#9812;</>;
            }
        } else {
            switch (number) {
                case 1:
                    return <>&#9823;</>;
                case 2:
                    return <>&#9821;</>;
                case 3:
                    return <>&#9822;</>;
                case 4:
                    return <>&#9820;</>;
                case 5:
                    return <>&#9819;</>;
                case 6:
                    return <>&#9818;</>;
            }
        }
    }

    return (
        <div className={"game"}>
            <div className={"table"}>
                <div className={"table-game"}>
                    <div className={"piece-list"}>
                        {
                            getEnemyPiece().map((piece) =>
                                <div key={Math.random()}
                                     className={["missing-piece", !controller.playerColor ? "red" : "blue"].join(" ")}>{getIcon(piece.type, piece.color)}</div>
                            )
                        }
                    </div>

                    <ChessboardSide className={controller.playerColor ? "" : "reverse"}>
                        <Chessboard className={controller.playerColor ? "" : "reverse"} controller={controller} setController={setController}/>
                    </ChessboardSide>

                    <div className={"piece-list"}>
                        {
                            getAlliesPiece().map((piece) =>
                                <div key={Math.random()}
                                     className={["missing-piece", controller.playerColor ? "red" : "blue"].join(" ")}>{getIcon(piece.type, piece.color)}</div>
                            )
                        }
                    </div>
                </div>

                <div className={"table-chat"}>
                    <div className={"chat-body"}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
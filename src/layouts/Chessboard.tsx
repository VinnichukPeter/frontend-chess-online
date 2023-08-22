import "../styles/layouts/chessboard.scss"
import React, {useEffect, useState} from 'react';
import Cell from "../components/Cell";
import CellModel from "../game/models/CellModel";
import ChessboardController from "../game/logic/ChessboardController";
import {GameAPI} from "../api/GameAPI";
import LapDTO from "../api/dto/LapDTO";

interface BoardProps {
    controller: ChessboardController;
    setController: (controller: ChessboardController) => void;
    className: string;
}

const Chessboard = (props: BoardProps) => {
    const {controller, setController} = props;
    const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);
    const [turn, setTurn] = useState<boolean>(controller.playerColor);

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    useEffect(() => {
        if (turn !== controller.playerColor) {
            let interval = setInterval(() => {
                GameAPI.checkMove().then((result) => {
                    if (result) {
                        GameAPI.getMove().then((lapDTO) => {
                            if (lapDTO !== null) {
                                controller.movePieceByIndex(lapDTO.moveFromX, lapDTO.moveFromY, lapDTO.moveToX, lapDTO.moveToY);

                                setTurn(!turn);
                                controller.checkInactivePiece();

                                return clearInterval(interval);
                            }
                        })
                    }
                });
            }, 1000)
        }
    }, [turn]);

    function select(cell: CellModel) {
        if (turn === controller.playerColor) {
            if (selectedCell && selectedCell !== cell && controller.canMovePiece(selectedCell, cell)) {
                controller.movePiece(selectedCell, cell);

                let lapDto: LapDTO = new LapDTO(selectedCell.positionByX, selectedCell.positionByY, cell.positionByX, cell.positionByY);
                console.log(lapDto);
                GameAPI.setMove(lapDto).then(r => {
                    console.log('----------', r)
                });
                controller.checkInactivePiece();
                setSelectedCell(null);
                setTurn(!turn);
            } else if (selectedCell && selectedCell === cell) {
                setSelectedCell(null);
            } else if (cell.piece && cell.piece.color === controller.playerColor) {
                setSelectedCell(cell);
            }
        }
    }

    function highlightCells() {
        controller.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newController = controller.updateController();
        setController(newController);
    }

    return (
        <div className={"chessboard"}>
            {controller.board.cells.map((row, x) =>
                <div className={"row"} key={"row-" + String(x)}>
                    {
                        row.map((cell, y) =>
                            <Cell key={"cell-" + String(x) + String(y)} cell={cell}
                                  className={props.className}
                                  selected={cell.positionByX === selectedCell?.positionByX &&
                                      cell.positionByY === selectedCell?.positionByY}
                                  onClick={select}/>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default Chessboard;
import "../styles/layouts/chessboard.scss"
import React, {useEffect, useState} from 'react';
import Cell from "../components/Cell";
import CellModel from "../game/models/CellModel";
import ChessboardController from "../game/logic/ChessboardController";

interface BoardProps {
    controller: ChessboardController;
    setController: (controller: ChessboardController) => void;
}

const Chessboard = (props: BoardProps) => {
    const {controller, setController} = props;

    const [selectedCell,
        setSelectedCell]
        = useState<CellModel | null>(null);
    const [turn,
        setTurn]
        = useState<boolean>(controller.playerColor);

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    function select(cell: CellModel) {
        if (selectedCell && selectedCell !== cell && controller.canMovePiece(selectedCell, cell)) {
            controller.movePiece(selectedCell, cell);
            controller.checkInactivePiece();
            setSelectedCell(null);

        } else if (selectedCell && selectedCell === cell) {
            setSelectedCell(null);
        } else if (cell.piece && cell.piece.color === controller.playerColor) {
            setSelectedCell(cell);
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

    function youTurn() {

    }

    function enemyTurn() {

    }

    return (
        <div className={"chessboard"}>
            {controller.board.cells.map((row, x) =>
                <div className={"row"} key={"row-" + String(x)}>
                    {
                        row.map((cell, y) =>
                            <Cell key={"cell-" + String(x) + String(y)} cell={cell}
                                  selected={cell.positionByX === selectedCell?.positionByX && cell.positionByY === selectedCell?.positionByY}
                                  onClick={select}/>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default Chessboard;
import BoardModel from "../models/BoardModel";
import CellModel from "../models/CellModel";
import PieceModel, {TypePiece} from "../models/PieceModel";
import piece from "../../components/Piece";
import pieceModel from "../models/PieceModel";

class ChessboardController {
    board: BoardModel;
    playerColor: boolean;


    //#region controller
    constructor(playerColor: boolean) {
        this.board = new BoardModel();
        this.playerColor = playerColor;
    }

    updateController(): ChessboardController {
        const newController = new ChessboardController(this.playerColor);
        newController.board.cells = this.board.cells;
        newController.board.inactivePiece = this.board.inactivePiece;
        newController.board.activePiece = this.board.activePiece;
        return newController;
    }

    //#endregion

    //#region init function
    setPlayerColor(playerColor: boolean) {
        this.playerColor = playerColor;
    }

    initCells(): void {
        for (let x = 0; x < 8; x++) {
            const row: CellModel[] = [];

            for (let y = 0; y < 8; y++) {
                row.push(new CellModel(
                    x,
                    y,
                    (x + y) % 2 === 0,
                    null));
            }
            this.board.cells.push(row);
        }
    }

    startPositionPiece(): void {
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                if (x === 0) {
                    if (y === 0 || y === 7) {
                        this.setPiece(x, y, new PieceModel(false, TypePiece.Rook));
                    } else if (y === 1 || y === 6) {
                        this.setPiece(x, y, new PieceModel(false, TypePiece.Knight));
                    } else if (y === 2 || y === 5) {
                        this.setPiece(x, y, new PieceModel(false, TypePiece.Bishop));
                    } else if (y === 3) {
                        this.setPiece(x, y, new PieceModel(false, TypePiece.Queen));
                    } else if (y === 4) {
                        this.setPiece(x, y, new PieceModel(false, TypePiece.King));
                    }
                } else if (x === 1) {
                    this.setPiece(x, y, new PieceModel(false, TypePiece.Pawn));
                } else if (x === 6) {
                    this.setPiece(x, y, new PieceModel(true, TypePiece.Pawn));
                } else if (x === 7) {
                    if (y === 0 || y === 7) {
                        this.setPiece(x, y, new PieceModel(true, TypePiece.Rook));
                    } else if (y === 1 || y === 6) {
                        this.setPiece(x, y, new PieceModel(true, TypePiece.Knight));
                    } else if (y === 2 || y === 5) {
                        this.setPiece(x, y, new PieceModel(true, TypePiece.Bishop));
                    } else if (y === 3) {
                        this.setPiece(x, y, new PieceModel(true, TypePiece.Queen));
                    } else if (y === 4) {
                        this.setPiece(x, y, new PieceModel(true, TypePiece.King));
                    }
                }
            }
        }
    }

    //#endregion

    //#region control board function
    setPiece(x: number, y: number, piece: PieceModel) {
        this.board.cells[x][y].piece = piece;
        this.board.activePiece.push(piece);
    }

    highlightCells(selectedCell: CellModel | null): void {
        for (let x = 0; x < this.board.cells.length; x++) {
            const row = this.board.cells[x];
            for (let y = 0; y < row.length; y++) {
                const targetCell = row[y];
                targetCell.available = this.canMovePiece(selectedCell, targetCell);
            }
        }
    }

    movePiece(selectedCell: CellModel, targetCell: CellModel): void {
        if (selectedCell?.piece && targetCell && this.canMovePiece(selectedCell, targetCell)
        ) {
            if (!selectedCell.piece.isMoving && selectedCell.piece.type === TypePiece.King) {
                const step = selectedCell.positionByY < targetCell.positionByY ? 1 : -1;
                const positionByX = targetCell.positionByX;
                const positionByY = targetCell.positionByY;


                const selectedRockCell = this.getCellByPosition(positionByX, positionByY + step);
                const targetRockCell = this.getCellByPosition(positionByX, positionByY + (step * -1));

                if (selectedRockCell.piece && selectedRockCell.piece.type === TypePiece.Rook) {
                    targetRockCell.piece = selectedRockCell.piece;
                    selectedRockCell.piece = null;
                }
            }

            selectedCell.piece.isMoving = true;
            targetCell.piece = selectedCell.piece;
            selectedCell.piece = null;

        }
    }

    getCellByPosition(positionByX: number, positionByY: number): CellModel {
        return this.board.cells[positionByX][positionByY];
    }

    getInactivePieceByColor(color: boolean): pieceModel[]{
        return this.board.inactivePiece.filter(piece => piece.color === color)
    }
    //#endregion

    //#region checker function
    checkInactivePiece(): void {
        this.board.activePiece.map((piece) => {
            let havePiece = true;

            this.board.cells.map((row) => {
                row.map((cell) => {
                    if(cell.piece){
                        if(cell.piece === piece){
                            havePiece = false;
                        }
                    }

                    return 0;
                })
                return 0;
            })

            if(havePiece){
                this.board.inactivePiece.push(piece);
            }
        });

        this.board.inactivePiece.map((inactivePiece) => {
            if(this.board.activePiece.includes(inactivePiece)){
                let index = this.board.activePiece.indexOf(inactivePiece);
                this.board.activePiece.splice(index, 1);
            }
        });
    }

    canMovePiece(selectedCell: CellModel | null, targetCell: CellModel): boolean {
        if (selectedCell && selectedCell.piece) {
            if (targetCell.piece && targetCell.piece.color === selectedCell.piece?.color) {
                return false;
            }

            switch (selectedCell.piece.type) {
                case TypePiece.Pawn: {

                    let step = selectedCell.piece.color ? -1 : 1;

                    if (!selectedCell.piece.isMoving && targetCell.positionByY === selectedCell.positionByY && targetCell.positionByX === selectedCell.positionByX + step * 2 && !targetCell.piece) {
                        return true;
                    } else if (targetCell.positionByY === selectedCell.positionByY && targetCell.positionByX === selectedCell.positionByX + step && !targetCell.piece) {
                        return true
                    } else if ((targetCell.positionByY === selectedCell.positionByY - 1 || targetCell.positionByY === selectedCell.positionByY + 1) && targetCell.positionByX === selectedCell.positionByX + step && targetCell.piece && targetCell.piece.color !== selectedCell.piece.color) {
                        return true;
                    }

                    return false;
                }
                case TypePiece.Bishop: {
                    return this.isEmptyDiagonal(selectedCell, targetCell);
                }
                case TypePiece.Rook: {
                    if (this.isEmptyVertical(selectedCell, targetCell)) {
                        return true;
                    } else if (this.isEmptyHorizontal(selectedCell, targetCell)) {
                        return true;
                    }

                    return false;
                }
                case TypePiece.Knight: {
                    const absX = Math.abs(selectedCell.positionByY - targetCell.positionByY);
                    const absY = Math.abs(selectedCell.positionByX - targetCell.positionByX);

                    return (absX === 1 && absY === 2) || (absX === 2 && absY === 1);
                }
                case TypePiece.Queen: {
                    if (this.isEmptyVertical(selectedCell, targetCell)) {
                        return true;
                    } else if (this.isEmptyHorizontal(selectedCell, targetCell)) {
                        return true;
                    } else if (this.isEmptyDiagonal(selectedCell, targetCell)) {
                        return true;
                    }

                    return false;
                }
                case TypePiece.King: {
                    if ((targetCell.positionByY === selectedCell.positionByY - 1 || targetCell.positionByY === selectedCell.positionByY + 1) &&
                        (targetCell.positionByX === selectedCell.positionByX - 1 || targetCell.positionByX === selectedCell.positionByX + 1)) {
                        return true;
                    } else if (((targetCell.positionByY === selectedCell.positionByY - 1) || (targetCell.positionByY === selectedCell.positionByY + 1)) &&
                        targetCell.positionByX === selectedCell.positionByX) {
                        return true;
                    } else if ((targetCell.positionByX === selectedCell.positionByX - 1 || targetCell.positionByX === selectedCell.positionByX + 1) &&
                        targetCell.positionByY === selectedCell.positionByY) {
                        return true;
                    } else if (!selectedCell.piece.isMoving && this.isWayToCastle(selectedCell, targetCell)) {
                        return true;
                    }


                    return false;
                }
            }
        }

        return false;
    }

    isEmptyVertical(selectedCell: CellModel, targetCell: CellModel): boolean {
        if (selectedCell.positionByY !== targetCell.positionByY) {
            return false;
        }

        const step = selectedCell.positionByX < targetCell.positionByX ? 1 : -1;

        for (let x = selectedCell.positionByX + step; x !== targetCell.positionByX; x += step) {
            if (this.board.cells[x][selectedCell.positionByY].piece) {
                return false;
            }
        }

        return true;
    }

    isWayToCastle(selectedCell: CellModel, targetCell: CellModel): boolean {
        if (selectedCell.positionByX === targetCell.positionByX) {
            if ((targetCell.positionByY !== 1) && (targetCell.positionByY !== 6)) {
                return false;
            }

            const step = selectedCell.positionByY < targetCell.positionByY ? 1 : -1;

            if (!this.board.cells[selectedCell.positionByX][targetCell.positionByY + step].piece ||
                this.board.cells[selectedCell.positionByX][targetCell.positionByY + step].piece?.isMoving === true) {
                return false;
            }

            for (let y = selectedCell.positionByY + step; y !== targetCell.positionByY; y += step) {
                if (this.board.cells[selectedCell.positionByX][y].piece) {
                    return false;
                }
            }

            return true;
        }
        return false;
    }

    isEmptyHorizontal(selectedCell: CellModel, targetCell: CellModel): boolean {
        if (selectedCell.positionByX !== targetCell.positionByX) {
            return false;
        }

        const step = selectedCell.positionByY < targetCell.positionByY ? 1 : -1;

        for (let y = selectedCell.positionByY + step; y !== targetCell.positionByY; y += step) {
            if (this.board.cells[selectedCell.positionByX][y].piece) {
                return false;
            }
        }

        return true;
    }

    isEmptyDiagonal(selectedCell: CellModel, targetCell: CellModel): boolean {
        const absX = Math.abs(selectedCell.positionByY - targetCell.positionByY);
        const absY = Math.abs(selectedCell.positionByX - targetCell.positionByX);

        if (absX !== absY) {
            return false;
        }

        const stepX = selectedCell.positionByX < targetCell.positionByX ? 1 : -1;
        const stepY = selectedCell.positionByY < targetCell.positionByY ? 1 : -1;

        for (let iter = 1; iter < absX; iter++) {
            if (this.board.cells[selectedCell.positionByX + stepX * iter][selectedCell.positionByY + stepY * iter].piece) {
                return false;
            }
        }

        return true;
    }

    //#endregion
}

export default ChessboardController;
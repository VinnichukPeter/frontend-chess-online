import PieceModel from "./PieceModel";

class CellModel {
    positionByX: number;
    positionByY: number;
    color: boolean;
    piece: PieceModel | null;
    available: boolean;

    constructor(positionByX: number, positionByY: number, color: boolean, piece: PieceModel | null) {
        this.positionByX = positionByX;
        this.positionByY = positionByY;
        this.color = color;
        this.piece = piece;
        this.available = false;
    }
}

export default CellModel;
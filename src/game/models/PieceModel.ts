export enum TypePiece {
    Pawn = 1, //Пішки
    Bishop = 2, //Офіцер
    Knight = 3, //Кінь
    Rook = 4, //Тура
    Queen = 5, //Королева
    King = 6, //Король
}

class PieceModel {
    color: boolean;
    type: TypePiece;
    isMoving: boolean;

    constructor(color: boolean, type: TypePiece) {
        this.color = color;
        this.type = type;
        this.isMoving = false;
    }
}

export default PieceModel;
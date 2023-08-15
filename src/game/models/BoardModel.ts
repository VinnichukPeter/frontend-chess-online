import CellModel from "./CellModel";
import PieceModel from "./PieceModel";

class BoardModel {
    cells: CellModel[][] = [];
    activePiece: PieceModel[] = [];
    inactivePiece: PieceModel[] = [];
}

export default BoardModel;
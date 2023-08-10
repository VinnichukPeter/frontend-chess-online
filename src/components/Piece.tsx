import "../styles/components/piece.scss"
import React from 'react';
import PieceModel, {TypePiece} from "../game/models/PieceModel";

interface PieceProps {
    piece: PieceModel | null
}

const Piece = (props: PieceProps) => {
    let piece = props.piece;

    if (piece === null) {
        return (<div></div>);
    }

    return (
        <div className={"piece-body"}>
            {getPiece(piece.color, piece.type)}
            <span></span>
        </div>
    );
};

export default Piece;


function getPiece(color: boolean, type: TypePiece) {
    if (!color) {
        switch (type) {
            case TypePiece.Pawn:
                return <img key={Math.random()} src={require("../assets/Piece/BlackPawn.png")} alt={"black pawn"}/>;
            case TypePiece.Bishop:
                return <img key={Math.random()} src={require("../assets/Piece/BlackBishop.png")} alt={"black bishop"}/>;
            case TypePiece.King:
                return <img key={Math.random()} src={require("../assets/Piece/BlackKing.png")} alt={"black king"}/>;
            case TypePiece.Knight:
                return <img key={Math.random()} src={require("../assets/Piece/BlackKnight.png")} alt={"black knight"}/>;
            case TypePiece.Queen:
                return <img key={Math.random()} src={require("../assets/Piece/BlackQueen.png")} alt={"black queen"}/>;
            case TypePiece.Rook:
                return <img key={Math.random()} src={require("../assets/Piece/BlackRook.png")} alt={"black rook"}/>;
        }
    } else {
        switch (type) {
            case TypePiece.Pawn:
                return <img key={Math.random()} src={require("../assets/Piece/WhitePawn.png")} alt={"white pawn"}/>;
            case TypePiece.Bishop:
                return <img key={Math.random()} src={require("../assets/Piece/WhiteBishop.png")} alt={"white bishop"}/>;
            case TypePiece.King:
                return <img key={Math.random()} src={require("../assets/Piece/WhiteKing.png")} alt={"white king"}/>;
            case TypePiece.Knight:
                return <img key={Math.random()} src={require("../assets/Piece/WhiteKnight.png")} alt={"white knight"}/>;
            case TypePiece.Queen:
                return <img key={Math.random()} src={require("../assets/Piece/WhiteQueen.png")} alt={"white queen"}/>;
            case TypePiece.Rook:
                return <img key={Math.random()} src={require("../assets/Piece/WhiteRook.png")} alt={"white rook"}/>;
        }
    }
}



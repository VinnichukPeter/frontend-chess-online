import "../styles/components/cell.scss"
import React from 'react';
import Piece from "./Piece";
import CellModel from "../game/models/CellModel";

interface CellProps {
    cell: CellModel,
    selected: boolean,
    onClick: (cell: CellModel) => void;
}

const Cell = (props: CellProps) => {

    return (
        <div onClick={() => {
            props.onClick(props.cell)
        }} className={["cell", props.cell.color ? "white" : "black",
            props.selected ? "selected" : "", props.cell.available && props.cell.piece ? "enemy" : ""].join(' ')}>
            <Piece key={Math.random()} piece={props.cell.piece}/>
            <span className={!props.cell.piece && props.cell.available ? "available" : ""}/>
        </div>
    );
};

export default Cell;


import "../styles/layouts/chessboard-side.scss";
import React, {ReactNode} from 'react';

interface ChessboardSideProps{
    children: ReactNode,
}

const ChessboardSide = (props: ChessboardSideProps) => {
    return (
        <div>
            <div className={"chessboard-side"}>
                <div className={"vertical-side"}>
                    <div className={"side-top"}>
                        <div className={"free"}></div>
                        <div className={"character"}>&#119912;</div>
                        <div className={"character"}>&#119913;</div>
                        <div className={"character"}>&#119914;</div>
                        <div className={"character"}>&#119915;</div>
                        <div className={"character"}>&#119916;</div>
                        <div className={"character"}>&#119917;</div>
                        <div className={"character"}>&#119918;</div>
                        <div className={"character"}>&#119919;</div>
                        <div className={"free"}></div>
                    </div>

                    <div className={"horizontal-side"}>
                        <div className={"side-left"}>
                            <div className={"number"}> &#120790; </div>
                            <div className={"number"}> &#120789; </div>
                            <div className={"number"}> &#120788; </div>
                            <div className={"number"}> &#120787; </div>
                            <div className={"number"}> &#120786; </div>
                            <div className={"number"}> &#120785; </div>
                            <div className={"number"}> &#120784; </div>
                            <div className={"number"}> &#120783; </div>
                        </div>

                        <div className={"chessboard-body"}>
                            {props.children}
                        </div>

                        <div className={"side-right"}>
                            <div className={"number"}> &#120790; </div>
                            <div className={"number"}> &#120789; </div>
                            <div className={"number"}> &#120788; </div>
                            <div className={"number"}> &#120787; </div>
                            <div className={"number"}> &#120786; </div>
                            <div className={"number"}> &#120785; </div>
                            <div className={"number"}> &#120784; </div>
                            <div className={"number"}> &#120783; </div>
                        </div>
                    </div>

                    <div className={"side-bottom"}>
                        <div className={"free"}></div>
                        <div className={"character"}>&#119912;</div>
                        <div className={"character"}>&#119913;</div>
                        <div className={"character"}>&#119914;</div>
                        <div className={"character"}>&#119915;</div>
                        <div className={"character"}>&#119916;</div>
                        <div className={"character"}>&#119917;</div>
                        <div className={"character"}>&#119918;</div>
                        <div className={"character"}>&#119919;</div>
                        <div className={"free"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChessboardSide;
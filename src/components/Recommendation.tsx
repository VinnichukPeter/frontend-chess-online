import "../styles/components/recommendation.scss"
import React from 'react';
import Image from "./Image";
import HyperLink from "./HyperLink";

const Recommendation = () => {
    return (
        <div className={"recommendation"}>
            <div className={"image-container"}>
                <Image width={"200px"} height={"200px"} alt={"Chess table"}
                       url={"https://img.fruugo.com/product/3/83/303643833_max.jpg"}/>

            </div>
            <div className={"text-container"}>
                <h1>This chessboard really the best?</h1>
                <span>We've tested it and can tell you all the pros and cons...</span>
                <span>We've tested it and can tell you all the pros and cons...</span>
                <span>We've tested it and can tell you all the pros and cons...</span>
                <span>We've tested it and can tell you all the pros and cons...</span>
                <span>We've tested it and can tell you all the pros and cons...</span>
                <span>We've tested it and can tell you all the pros and cons...</span>

                <HyperLink url={"/post/678"} value={"Read more..."}/>
            </div>
        </div>
    );
};

export default Recommendation;
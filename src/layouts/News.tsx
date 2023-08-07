import "../styles/layouts/news.scss"
import React from 'react';
import Recommendation from "../components/Recommendation";

const News = () => {
    return (
        <div className={"news"}>
            <div className={"recommendations"}>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
            </div>
        </div>
    );
};

export default News;
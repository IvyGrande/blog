import React, {useState} from "react";
import articleList from "../data/articleList";
import {ArticleCard} from "../../component/ArticleCard";



export const MainPart = () => {
    const [cardList,setCardList] = useState(articleList);
    return (
        <div>
            <ArticleCard />
        </div>
    );
}
import React, {useState} from "react";
import articleList from "../data/articleList";
import {ArticleCard} from "../../component/ArticleCard";



export const MainPart = () => {
    const [cardList,setCardList] = useState(articleList);
    const CardModal = cardList.map(
        item => {
            return (
                <ArticleCard
                    key={item.id}
                    id={item.id}
                    list={item}
                    />
            )
        }
    )
    return (
        <div>
            {CardModal}
        </div>
    );
}
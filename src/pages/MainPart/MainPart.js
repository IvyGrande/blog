import React, {useState} from "react";
import articleList from "../data/articleList";
import {ArticleCard} from "../component/ArticleCard";
import {connect} from "react-redux";

export const MainPart = () => {
    const [cardList, setCardList] = useState(articleList);
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

function mapStateToProps() {

}

export default connect(mapStateToProps)(MainPart)
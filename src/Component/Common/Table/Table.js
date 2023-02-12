import React, {useState} from "react";
import articleList from "../../../Data/Article_List";
import {ArticleCard} from "./ArticleCard/ArticleCard";
import {connect} from "react-redux";

const Table = () => {
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

function mapStateToProps(state) {
    console.log(state)
    return {
        name: state.username
    }
}

export default connect(mapStateToProps)(Table)
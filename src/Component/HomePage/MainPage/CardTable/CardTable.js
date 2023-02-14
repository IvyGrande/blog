import React from "react";
import ArticleCard from "./ArticleCard/ArticleCard";
import { connect } from "react-redux";

const CardTable = (props) => {
  const CardModal = props.cardList.map(
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
    cardList: state.articleReducer.articleList
  }
}

export default connect(mapStateToProps)(CardTable)
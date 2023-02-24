import React from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { connect } from "react-redux";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { deleteCard, selectCard } from "../../../../redux/action/articleAction";
import "./styles/ArticleCard.css"

export const ArticleCard = (props) => {
  const {articleList, id, list, isAuthor, selectCard, deleteCard} = props;
  const navigate = useNavigate();

  const clickOpenArticle = () => {
    const articleChosen = articleList.find(card =>
      card.id === id && card
    );
    selectCard(articleChosen);
    navigate("/compose");
  };

  const clickEditArticle = () => {
    const readCard = articleList.find(card =>
      card.id === id && card
    );
    selectCard(readCard);
    navigate("/compose");
  };

  const clickDeleteArticle = () => {
    deleteCard(id)
  };

  return (
    <Card style={{margin: "30px"}}>
      <div className="tableBlock">
        <CardActionArea onClick={clickOpenArticle} disabled={isAuthor ? true : false}>
          <CardContent style={{width: "1000px", margin: "0 0 0 20px"}}>
            <div className="cardTop">
              <h3>{list?.title}</h3>
            </div>
            <>
              <p className="row">{list?.content}</p>
              <p>review:{list?.commentList.length}</p>
            </>
          </CardContent>
        </CardActionArea>
        {isAuthor
          ? <div className="changeState">
            <Button onClick={clickEditArticle} variant="outlined">EDIT</Button>
            <Button onClick={clickDeleteArticle} variant="outlined">DELETE</Button>
          </div>
          : null
        }
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const {isAuthor} = state.loginReducer;
  const {articleSelected} = state.articleSelectedReducer;
  const {articleList} = state.articleReducer;

  return {
    isAuthor,
    articleList,
    articleSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCard: (e) => dispatch(selectCard(e)),
    deleteCard: (e) => dispatch(deleteCard(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard);

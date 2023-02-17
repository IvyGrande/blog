import React from "react";
import "./styles/ArticleCard.css"
import { Card, CardActionArea, CardContent } from "@mui/material";
import { deleteCard, selectCard } from "../../../../../redux/action/article/articleAction";
import { connect } from "react-redux";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ArticleCard = (props) => {
  const navigate = useNavigate();
  const handleOpen = () => {
    const readCard = props.cardList.find(card =>
      card.id === props.id && card
    )
    props.getCard(readCard);
    navigate("/compose");
  }
  const editCard = () => {
    const readCard = props.cardList.find(card =>
      card.id === props.id && card
    )
    props.getCard(readCard);
    navigate("/compose");
  }
  const deleteCard = () => {
    props.deleteId(props.id)
  }
  return (
    <div className="table">
      <Card>
        <div className="tableBlock">
          <CardActionArea onClick={handleOpen} disabled={props.isAuthor ? true : false}>
            <CardContent>
              <div className="cardItem">
                <div className="cardTop">
                  <h3>{props.list.title}</h3>
                </div>
                <div>
                  <p className="row">{props.list.content}</p>
                  <p>review:{props.list.commentList.length}</p>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
          {props.isAuthor ?
            <div className="changeState">
              <Button onClick={editCard} variant="outlined">EDIT</Button>
              <Button onClick={deleteCard} variant="outlined">DELETE</Button>
            </div> : null
          }
        </div>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor,
    cardList: state.articleReducer.articleList,
    articleSelected: state.articleSelectedReducer.articleSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCard: (e) => dispatch(selectCard(e)),
    deleteId: (e) => dispatch(deleteCard(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard)
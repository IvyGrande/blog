import React from "react";
import "./styles/ArticleCard.css"
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { deleteCard,selectCard } from "../../../../../redux/action/article/articleAction";
import { connect } from "react-redux";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ArticleCard = (props) => {
  const navigate = useNavigate();
  const handleOpen = () => {
    // const readCard = props.cardList.find(card =>
    //   card.id === props.id && card
    // )
    // props.getCard("card",readCard);
  }
  const editCard = () => {
    const readCard = props.cardList.find(card =>
      card.id === props.id && card
    )
    props.getCard(readCard);
    navigate("/compose");
  }
  const deleteCard = () => {
    // props.deleteId(props.id)
  }
  return (
    <div className="table">
      <Card>
        <div className="tableBlock">
          <CardActionArea onClick={handleOpen} disabled={props.isAuthor ? true : false}>
            <CardContent>
              <div className="cardItem">
                <h3>{props.list.title}</h3>
                <Typography variant="body2" color="text.secondary">
                  <p>{props.list.content}</p>
                </Typography>
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
    cardList: state.articleReducer.articleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCard: (e) => dispatch(selectCard(e)),
    deleteId: (e) => dispatch(deleteCard(e))}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard)
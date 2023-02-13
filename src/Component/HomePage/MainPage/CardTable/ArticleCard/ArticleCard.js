import React from "react";
import "./styles/ArticleCard.css"
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {deleteCard, editCardAction, openCompose, selectCard} from "../../../../../redux/action/mianPage/mainPage";
import {connect} from "react-redux";
// import {editState} from "../../../../../redux/reducers/mainPage";

const ArticleCard = (props) => {
    const handleOpen = () => {
        // console.log("id",props.id)
        const readCard = props.cardList.find(card =>
            card.id === props.id && card
        )
        // console.log("card", props.cardList);
        // console.log(readCard);
        props.getCard(readCard);
        props.openCompose();
    }


    const editCard = () => {
        const readCard = props.cardList.find(card =>
            card.id === props.id && card
        )
        // console.log("card", props.cardList);
        // console.log(readCard);
        props.getCard(readCard);
        props.openCompose();
        props.getEditState();
    }
    const deleteCard = () => {
        // console.log("id", props.id);
        props.deleteId(props.id)
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
                            <button onClick={editCard}>EDIT</button>
                            <button onClick={deleteCard}>DELETE</button>
                        </div> : null
                    }
                </div>

            </Card>
        </div>
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        isAuthor: state.loginReducer.isAuthor,
        cardList: state.submitReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCard: (e) => dispatch(selectCard(e)),
        openCompose: () => dispatch(openCompose()),
        deleteId:(e)=>dispatch(deleteCard(e)),
        getEditState:()=>dispatch(editCardAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard)
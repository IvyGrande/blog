import { Button } from "antd";
import { Comment } from "semantic-ui-react";
import React from "react";
import { connect } from "react-redux";
import "../styles/comment.css"
import { deleteComment } from "../../../../redux/action/articleAction";

export const CommentShowModal = (props) => {
  const handleClick = () => {
    console.log("id",props.articleSelected.id)
    props.deleteReviewId(props.articleSelected.id, props.id)
  }
  return (
    <div className="showComment">
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
        <Comment.Content>
          <div className="top">
            <Comment.Author as='a'>{props.nameShow}</Comment.Author>
            {props.isAuthor && <Button type="text" className="button" onClick={handleClick}>Delete</Button>}
          </div>
          <Comment.Text>{props.content}</Comment.Text>
        </Comment.Content>
      </Comment>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor,
    name: state.loginReducer.username,
    articleSelected: state.articleSelectedReducer.articleSelected,
    cardList: state.articleReducer.articleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReviewId: (selectedId, reviewId) => dispatch(deleteComment(selectedId, reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentShowModal)


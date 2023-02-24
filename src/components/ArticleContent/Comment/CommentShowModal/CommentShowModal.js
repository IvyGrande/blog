import React from "react";
import { Button } from "antd";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";

import "../styles/comment.css"
import { deleteComment } from "../../../../redux/action/articleAction";

export const CommentShowModal = (props) => {
  const {isAuthor, deleteReviewId, articleSelected, id, nameShow, content} = props;

  const handleClick = () => {
    deleteReviewId(articleSelected.id, id);
  };

  return (
      <Comment style={{width: '1000px'}}>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
        <Comment.Content>
            <Comment.Author as='a'>{nameShow}</Comment.Author>
            {isAuthor && <Button type="text" className="button" onClick={handleClick}>Delete</Button>}
          <Comment.Text>{content}</Comment.Text>
        </Comment.Content>
      </Comment>
  )
}

const mapStateToProps = (state) => {
  const {isAuthor} = state.loginReducer;
  const {articleSelected} = state.articleSelectedReducer;
  const {cardList} = state.articleReducer

  return {
    isAuthor,
    articleSelected,
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReviewId: (selectedId, reviewId) => dispatch(deleteComment(selectedId, reviewId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentShowModal);


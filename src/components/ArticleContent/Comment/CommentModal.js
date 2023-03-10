import React, { useState } from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import uuid from "react-uuid";

import CommentShowModal from "./CommentShowModal/CommentShowModal";
import { addComment } from "../../../redux/action/articleAction";
import "./styles/comment.css"

export const CommentModal = (props) => {
  const {isAuthor, username, addComment, articleSelected, articleList} = props;

  const [review, setReview] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [isCommentBoxEmpty, setIsCommentBoxEmpty] = useState();

  const inputComment = (e) => {
    setReview(e.target.value);
    setReviewName(isAuthor ? username : "visitor");
  };

  const addNewReview = () => {
    const newComment = {reviewId: uuid(), reviewName, review};
    setReview('');
    setIsCommentBoxEmpty(false);
    review ? addComment(articleSelected.id, newComment) : setIsCommentBoxEmpty(true);
  };

  const articleToShow = articleList?.find(item => item.id === articleSelected.id && item);
  const showComment = articleToShow?.commentList.map(
    item => {
      return (
        <CommentShowModal
          key={item.reviewId}
          id={item.reviewId}
          content={item.review}
          nameShow={item.reviewName}
        />
      );
    });

  return (
    <div className="comment">
      <Comment.Group>
        <h3>COMMENTS</h3>
        {showComment}
        <Form className="input-box" reply>
          <Form.TextArea
            style={{width: "1000px"}}
            placeholder="Type something here…"
            onChange={inputComment}
            required={isCommentBoxEmpty && "required"}
            value={review}
          />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            onClick={addNewReview}
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {isAuthor, username} = state.loginReducer;
  const {articleSelected} = state.articleSelectedReducer;
  const {articleList} = state.articleReducer;

  return {
    articleList,
    articleSelected,
    isAuthor,
    username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (selectedId, item) => dispatch(addComment(selectedId, item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);

const styleLink = document.createElement("link");

styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

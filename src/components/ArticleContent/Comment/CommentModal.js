import React, { useState } from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import uuid from "react-uuid";
import CommentShowModal from "./CommentShowModal/CommentShowModal";
import "./styles/comment.css"
import { addComment } from "../../../redux/action/articleAction";

export const CommentModal = (props) => {
  const [review, setReview] = useState("")
  const [reviewName, setReviewName] = useState("")
  const inputComment = (e) => {
    setReview(e.target.value)
    setReviewName(props.isAuthor ? props.name : "visitor")
    console.log("name", review)
  }
  const handleClick = () => {
    console.log("name", props.articleSelected.id)
    console.log(props.isAuthor)
    const newComment = {reviewId: uuid(), reviewName, review}
    setReview('')
    props.addComment(props.articleSelected.id, newComment);
  }
  const articleToShow = props.articleIsShow?.find(item => item.id === props.articleSelected.id && item)
  const showComment = articleToShow?.commentList.map(
    item => {
      return (
        <CommentShowModal
          key={item.reviewId}
          id={item.reviewId}
          content={item.review}
          nameShow={item.reviewName}
        />
      )
    })
  return (
    <div className="comment">
      <Comment.Group>
        <h3>COMMENTS</h3>
        {showComment}
        <Form className="input-box" reply>
          <Form.TextArea
            placeholder="Type something here…"
            onChange={inputComment}
            value={review}
          />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            onClick={handleClick}
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    articleIsShow: state.articleReducer.articleList,
    articleSelected: state.articleSelectedReducer.articleSelected,
    isAuthor: state.loginReducer.isAuthor,
    name: state.loginReducer.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (selectedId, item) => dispatch(addComment(selectedId, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal)

const styleLink = document.createElement("link");

styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
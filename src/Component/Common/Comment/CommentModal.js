import React, { useState } from 'react';
import { Box, FormControl } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { Button, Menu } from "antd";
import { connect } from "react-redux";
// import { CommentShowModal } from "./ListModal/commentShowModal";
import uuid from "react-uuid";
import { addComment } from "../../../redux/action/article/articleAction";
import { CommentShowModal } from "./ListModal/commentShowModal";
// import { articleReducer } from "../../../redux/reducers/articleReducer";
// import articleSelectedReducer from "../../../redux/reducers/chosenReducer";


const CommentModal = (props) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [review, setReview] = useState("")
  // console.log("new", props.articleSelected.id)
  console.log("new", props.articleSelected.commentList)
  const inputComment = (e) => {
    setReview(e.target.value)
  }
  const handleClick = () => {
    const newComment = {ReviewId: uuid(), review}
    // console.log("new",props.articleSelected.id, newComment)
    setReview('')
    props.addComment(props.articleSelected.id, newComment);
  }
  console.log(props.commentIsShow)
  const articleToShow=props.commentIsShow.find(item=>item.id===props.articleSelected.id&&item)
  console.log(articleToShow.commentList)
  const showComment = articleToShow.commentList.map(
    item => {
      return (
        <CommentShowModal
          key={item.ReviewId}
          id={item.ReviewId}
          content={item.review}
        />
      )
    })

  return (
    <FormControl>
      <h2>COMMENT</h2>
      {showComment}
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        value={review}
        onChange={inputComment}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'right',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Menu
              // anchorEl={anchorEl}
              // open={Boolean(anchorEl)}
              // onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{'--List-decorator-size': '24px'}}
            >
            </Menu>
            <Button onClick={handleClick}>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 1000
        }}
      />
    </FormControl>
  );
}

const mapStateToProps = (state) => {
  return {
    commentIsShow: state.articleReducer.articleList,
    articleSelected: state.articleSelectedReducer.articleSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (selectedId, item) => dispatch(addComment(selectedId, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal)

import "./styles/Compose.css"
import { connect } from "react-redux";
import { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { cancelSelected, updateCard } from "../../redux/action/articleAction";
import { Button, Input } from "antd";
import { Comment } from "semantic-ui-react";
import CommentModal from "./Comment/CommentModal";

export const ArticleContent = (props) => {
  const [title, setTitle] = useState(props.articleSelected?.title);
  const [content, setContent] = useState(props.articleSelected?.content);
  const navigate = useNavigate();
  const {TextArea} = Input;

  const submitData = () => {
    const id = props.articleSelected.id ? props.articleSelected.id : uuid()
    const reviewInArticle = props.articleIsShow.find(e => e.id === props.articleSelected.id && e)
    const commentList = props.articleSelected.id ? reviewInArticle.commentList : []
    const newArticle = {id, title, content, commentList}
    props.getData(newArticle);
    props.cancel_select(props.articleSelected.commentList);
    navigate("/");
  }
  const cancel = () => {
    props.cancel_select(props.articleSelected.commentList);
    navigate("/");
  }
  const inputTitle = (e) => {
    setTitle(e.target.value)
  };
  const inputContent = (e) => {
    setContent(e.target.value)
  };
  const returnToHomepage = () => {
    props.cancel_select(props.articleSelected.commentList);
    navigate("/");
  }

  return (
    <div className="compose">
      <div className="block">
        {!props.isAuthor &&
          <>
            <div className="head">
              <h2>ARTICLE</h2>
              <Button onClick={returnToHomepage} type="primary">Back To Homepage</Button></div>
            <div className="textShow">
              <TextArea
                rows={1}
                bordered={false}
                readOnly
                size="large"
                value={title}
              /></div>
            <div className="text">
              <TextArea
                bordered={false}
                rows={20}
                readOnly
                value={content}
              />
            </div>
          </>
        }

        {props.isAuthor &&
          <>
            <div className="head">
              <h2>{props.articleSelected.id ? "EDIT" : "COMPOSE"}</h2>
              <div className="submit">
                <Button onClick={cancel}>Cancel</Button>
                <Button onClick={submitData} type="primary">Submit</Button>
              </div>
            </div>
            <div className="text">
              <TextArea
                placeholder="Title"
                rows={1}
                value={title}
                onChange={inputTitle}
              /></div>
            <div className="text">
              <TextArea
                placeholder="Start here..."
                rows={12}
                value={content}
                onChange={inputContent}
              />
            </div>
          </>
        }
        <Comment/>
        {props.articleSelected?.id && <CommentModal/>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    articleSelected: state.articleSelectedReducer.articleSelected,
    articleIsShow: state.articleReducer.articleList,
    isAuthor: state.loginReducer.isAuthor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (e) => dispatch(updateCard(e)),
    cancel_select: (e) => dispatch(cancelSelected(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent)
import "./styles/ArticleContent.css"
import { connect } from "react-redux";
import { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { cancelSelected, updateCard } from "../../redux/action/articleAction";
import { Button, Input } from "antd";
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
    <div className="article-page">
      <div className="head">
        <h2>{props.isAuthor ? props.articleSelected.id ? "EDIT" : "COMPOSE" : "ARTICLE"}</h2>
        {props.isAuthor ?
          <div className="submit">
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={submitData} type="primary">Submit</Button>
          </div> :
          <Button onClick={returnToHomepage} type="primary">Back To Homepage</Button>
        }
      </div>
      <TextArea
        rows={1}
        style={{width: "1000px", marginTop: "10px"}}
        size="large"
        value={title}
        onChange={inputTitle}
        placeholder={props.isAuthor ? "Title..." : null}
        readOnly={!props.isAuthor}
        bordered={props.isAuthor}
      />
      <TextArea
        rows={20}
        style={{width: "1000px", marginTop: "10px"}}
        value={content}
        onChange={inputContent}
        placeholder={props.isAuthor ? "Start here..." : null}
        readOnly={!props.isAuthor}
        bordered={props.isAuthor}
      />
      {props.articleSelected?.id && <CommentModal/>}
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
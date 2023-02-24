import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cancelSelected, addNewArticle, editSelectedArticle } from "../../redux/action/articleAction";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import uuid from "react-uuid";

import CommentModal from "./Comment/CommentModal";
import "./styles/ArticleContent.css"

export const ArticleContent = (props) => {
  const navigate = useNavigate();
  const {TextArea} = Input;

  const {isAuthor, articleList, articleSelected, addNewArticle, editSelectedArticle, cancel_select} = props;
  const [title, setTitle] = useState(articleSelected?.title);
  const [content, setContent] = useState(articleSelected?.content);

  const submitData = () => {
    const reviewInArticle = {...articleList.find(e => e.id === articleSelected.id && e)}.commentList || [];

    if (articleSelected.id) {
      const editedArticle = {id: articleSelected.id, title, content, commentList: reviewInArticle || []};
      editSelectedArticle(editedArticle);
    } else {
      const newArticle = {id: uuid(), title, content, commentList: []};
      addNewArticle(newArticle);
    }
    cancel_select(articleSelected.commentList);
    navigate("/");
  };

  const cancel = () => {
    cancel_select(articleSelected.commentList);
    navigate("/");
  };

  const inputTitle = (e) => {
    setTitle(e.target.value)
  };

  const inputContent = (e) => {
    setContent(e.target.value)
  };

  const returnToHomepage = () => {
    cancel_select(articleSelected.commentList);
    navigate("/");
  };

  return (
    <div className="article-page">
      <div className="head">
        <h2>{isAuthor ? articleSelected.id ? "EDIT" : "COMPOSE" : "ARTICLE"}</h2>
        {isAuthor
          ? <div className="submit">
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={submitData} type="primary">Submit</Button>
          </div>
          : <Button onClick={returnToHomepage} type="primary">Back To Homepage</Button>
        }
      </div>
      <TextArea
        rows={1}
        style={{width: "1000px", marginTop: "10px"}}
        size="large"
        value={title}
        onChange={inputTitle}
        placeholder={isAuthor ? "Title..." : null}
        readOnly={!isAuthor}
        bordered={isAuthor}
      />
      <TextArea
        rows={20}
        style={{width: "1000px", marginTop: "10px"}}
        value={content}
        onChange={inputContent}
        placeholder={isAuthor ? "Start here..." : null}
        readOnly={!isAuthor}
        bordered={isAuthor}
      />
      {articleSelected?.id && <CommentModal/>}
    </div>
  );
};
const mapStateToProps = (state) => {
  const {isAuthor} = state.loginReducer;
  const {articleSelected} = state.articleSelectedReducer;
  const {articleList} = state.articleReducer;

  return {
    articleSelected,
    articleList,
    isAuthor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewArticle: (e) => dispatch(addNewArticle(e)),
    cancel_select: (e) => dispatch(cancelSelected(e)),
    editSelectedArticle: (e) => dispatch(editSelectedArticle(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent);

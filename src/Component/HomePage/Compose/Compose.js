import "./styles/Compose.css"
import { Button, Input } from 'antd';
import { connect } from "react-redux";
import { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { cancelSelected, updateCard } from "../../../redux/action/article/articleAction";
import Comment from "../../Common/Comment/Comment";
import CommentModal from "../../Common/Comment/Comment";


const Compose = (props) => {
  const [title, setTitle] = useState(props.articleSelected.title);
  const [content, setContent] = useState(props.articleSelected.content);
  const navigate = useNavigate();
  const {TextArea} = Input;

  const submitData = () => {
    const id = props.articleSelected.id ? props.articleSelected.id : uuid()
    const newArticle = {id, title, content}
    props.getData(newArticle);
    props.cancel_select();
    navigate("/");
  }

  const cancel = () => {
    props.cancel_select();
    navigate("/");
  }
  const inputTitle = (e) => {
    setTitle(e.target.value)
  };
  const inputContent = (e) => {
    setContent(e.target.value)
  };
  return (
    <div className="compose">
      {/*<Comment />*/}
      <div className="block">
        {!props.isAuthor &&
          <h2>ARTICLE</h2>
        }
          {props.isAuthor &&
          <div className="head">
            <h2>{props.articleSelected.id ? "EDIT" : "COMPOSE"}</h2>
            <div className="submit">
              <Button onClick={cancel}>Cancel</Button>
              <Button onClick={submitData} type="primary">Submit</Button>
            </div>
          </div>}
        <div className="text"><TextArea
          placeholder="Title"
          rows={1}
          readOnly={props.isAuthor ? false : true}
          value={title}
          onChange={inputTitle}
        /></div>
        <div className="text">
          <TextArea
            placeholder="Start here..."
            readOnly={props.isAuthor ? false : true}
            rows={12}
            value={content}
            onChange={inputContent}
          />
        </div>
        <CommentModal />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    articleSelected: state.articleSelectedReducer.articleSelected,
    isAuthor: state.loginReducer.isAuthor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (e) => dispatch(updateCard(e)),
    cancel_select: () => dispatch(cancelSelected())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose)
import "./css/Compose.css"
import {Button, Input} from 'antd';
import {connect} from "react-redux";

const Compose = (props) => {
    // const [title, setTitle] = useState(props.changeCard.title);
    // const [content, setContent] = useState(props.changeCard.content);
    const {TextArea} = Input;

    function submitData() {
        // const newArticle = {id: uuid(), title, content}
        // props.getData(newArticle)
        // props.closeCompose();
    }

    const editData = () => {
        // props.getEditCard();
    }
    const cancel = () => {
        // props.closeCompose();
    }

    const inputTitle = (e) => {
        // setTitle(e.target.value)
    };
    const inputContent = (e) => {
        // setContent(e.target.value)
    };
    return (
        <div className="compose">
            <div className="block">
                <div className="head">
                    <h2>COMPOSE</h2>
                    {/*{props.isEdit?*/}
                    <div className="edit">
                        <Button onClick={cancel}>Cancel</Button>
                        <Button onClick={editData} type="primary">Submit</Button>
                    </div>
                    :
                    <div className="compose">
                        <Button onClick={cancel}>Cancel</Button>
                        <Button onClick={submitData} type="primary">Submit</Button>
                    </div>
                    {/*}*/}
                </div>
                <div className="text"><TextArea
                    placeholder="Title"
                    rows={1}
                    readOnly={props.isAuthor ? false : true}
                    // value={title}
                    onChange={inputTitle}
                /></div>
                <div className="text">
                    <TextArea
                        placeholder="Start here..."
                        readOnly={props.isAuthor ? false : true}
                        rows={12}
                        // value={content}
                        onChange={inputContent}
                    />
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {

    return {
        changeCard:state.StoreSelected,
        isAuthor: state.loginReducer.isAuthor,
        isEdit:state.editState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose)
import "./Compose.css"
import {Button, Input} from 'antd';

export const Compose = () => {
    const {TextArea} = Input;
    let inputTitle;
    let inputContent;
    return (
        <div className="compose">
            <div className="block">
                <div className="head">
                    <h2>COMPOSE</h2>
                    <div>
                        <Button>Cancel</Button>
                        <Button type="primary">Submit</Button>
                    </div>
                </div>
                <div className="text"><TextArea
                    placeholder="Title"
                    rows={1}
                    onChange={inputTitle}
                /></div>
                <div className="text"><TextArea
                    placeholder="Start here..."
                    rows={12}
                    onChange={inputContent}/></div>
            </div>
        </div>
    )
}
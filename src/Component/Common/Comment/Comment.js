import {Avatar} from "@mui/material";
import {Editor} from "./Editor/Editor";
import moment from 'moment';
import React, { useState } from 'react';
import {CommentList} from "./ListModal/ListModal"

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: 'Han Solo',
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: <p>{value}</p>,
                    datetime: moment('2016-11-22').fromNow(),
                },
            ]);
        }, 1000);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    );
};
export default Comment;
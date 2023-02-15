
export const CommentShowModal = (props) => {
  return(
    <div className="showComment">
      <div className="name">
        {/*{props.name}*/}
        name
      </div>
      <div className="content">
        {props.content}
      </div>
    </div>
  )
}





// import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
// import { Avatar,Comment, Tooltip } from 'antd';
// import React, { createElement, useState } from 'react';
// // import { Comment } from "@mui/icons-material";
//
// export const CommentShowModal = () => {
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [action, setAction] = useState(null);
//   const like = () => {
//     setLikes(1);
//     setDislikes(0);
//     setAction('liked');
//   };
//   const dislike = () => {
//     setLikes(0);
//     setDislikes(1);
//     setAction('disliked');
//   };
//   const actions = [
//     <Tooltip key="comment-basic-like" title="Like">
//       <span onClick={like}>
//         {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
//         <span className="comment-action">{likes}</span>
//       </span>
//     </Tooltip>,
//     <Tooltip key="comment-basic-dislike" title="Dislike">
//       <span onClick={dislike}>
//         {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
//         <span className="comment-action">{dislikes}</span>
//       </span>
//     </Tooltip>,
//     <span key="comment-basic-reply-to">Reply to</span>
//   ];
//
//   return (
//     <Comment
//       actions={actions}
//       author={<a>Han Solo</a>}
//       avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
//       content={
//         <p>
//           We supply a series of design principles, practical patterns and high quality design
//           resources (Sketch and Azure), to help people create their product prototypes beautifully
//           and efficiently.
//         </p>
//       }
//     />
//   );
// };

import React from 'react';
// import { CommentList } from "./ListModal/ListModal";
import { Box, FormControl, FormLabel, IconButton, MenuItem } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import FormatBold from '@mui/icons-material/FormatBold';
import { Button, Menu } from "antd";
import { ListItemDecorator } from "@mui/joy";
import { Check, KeyboardArrowDown } from "@mui/icons-material";
// import {Avatar} from "@mui/material";
// import {Editor} from "./Editor/Editor";
// import moment from 'moment';
//
// import {CommentList} from "./ListModal/ListModal"

function FormatItalic() {
  return null;
}

export default function CommentModal() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <FormControl>
      <h2>COMMENT</h2>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              justifyContent:'right',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{'--List-decorator-size': '24px'}}
            >
            </Menu>
            <Button>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 1000,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </FormControl>
  );
}

// const CommentModal = () => {
// const [comments, setComments] = useState([]);
// const [submitting, setSubmitting] = useState(false);
// const [value, setValue] = useState('');
// const handleSubmit = () => {
//     if (!value) return;
//     setSubmitting(true);
//     setTimeout(() => {
//         setSubmitting(false);
//         setValue('');
//         setComments([
//             ...comments,
//             {
//                 author: 'Han Solo',
//                 avatar: 'https://joeschmoe.io/api/v1/random',
//                 content: <p>{value}</p>,
//                 datetime: moment('2016-11-22').fromNow(),
//             },
//         ]);
//     }, 1000);
// };
// const handleChange = (e) => {
//     setValue(e.target.value);
// };
//     return (
//         <>
//             <h2>COMMENT</h2>
//             <CommentList/>
//             {/*{comments.length > 0 && <CommentList comments={comments} />}*/}
//             {/*<Comment*/}
//             {/*    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}*/}
//             {/*    content={*/}
//             {/*        <Editor*/}
//             {/*            onChange={handleChange}*/}
//             {/*            onSubmit={handleSubmit}*/}
//             {/*            submitting={submitting}*/}
//             {/*            value={value}*/}
//             {/*        />*/}
//             {/*    }*/}
//             {/*/>*/}
// </>
//     );
// };
// export default CommentModal;
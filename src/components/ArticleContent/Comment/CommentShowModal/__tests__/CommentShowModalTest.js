import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter as Router } from 'react-router-dom';
import { deleteComment } from "../../../../../redux/action/articleAction";
import { DELETE_COMMENT_FROM_SPECIFIC_ARTICLE } from "../../../../../constants/constant";
import { CommentShowModal } from "../CommentShowModal";

Enzyme.configure({adapter: new Adapter()})
describe('CommentShowModal component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <CommentShowModal/>
      </Router>);
    expect(wrapper.find('.showComment').length).toBe(1);
  });

  it('should dispatch if delete a comment selected', () => {
    const action = {
      type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
    }

    expect(
      deleteComment(2, 99, action)
    ).toEqual({
      type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
      selectedId: 2,
      reviewedId: 99
    })
  })
});
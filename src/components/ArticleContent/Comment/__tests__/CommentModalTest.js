import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter as Router } from 'react-router-dom';
import { CommentModal } from "../CommentModal";
import { addComment } from "../../../../redux/action/articleAction";
import { ADD_COMMENT_TO_SPECIFIC_ARTICLE } from "../../../../constants/constant";

Enzyme.configure({adapter: new Adapter()})
describe('Header component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <CommentModal />
      </Router>);
    expect(wrapper.find('.comment').length).toBe(1);
  });

    it('should dispatch if add a new comment', () => {
      const action = {
        type:ADD_COMMENT_TO_SPECIFIC_ARTICLE
      }

      expect(
        addComment(1,{},action)
      ).toEqual({
        type: ADD_COMMENT_TO_SPECIFIC_ARTICLE,
        selectedId:1,
        item:{}
      })
    })
});
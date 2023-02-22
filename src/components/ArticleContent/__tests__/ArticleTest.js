import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter as Router } from 'react-router-dom';
import { cancelSelected, updateCard } from "../../../redux/action/articleAction";
import { ADD_OR_EDIT_ARTICLE, CANCEL_SELECT } from "../../../constants/constant";
import { ArticleContent } from "../ArticleContent";

Enzyme.configure({adapter: new Adapter()})
describe('compose component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <ArticleContent/>
      </Router>);
    expect(wrapper.find('.compose').length).toBe(1);
  });

  it('should dispatch if add a new article or edit', () => {
    const action = {
      type: ADD_OR_EDIT_ARTICLE,
    }

    expect(
      updateCard({id: 3}, action)
    ).toEqual({
      type: ADD_OR_EDIT_ARTICLE,
      newData: {id: 3}
    })
  })

  it('should dispatch if cancel select', () => {
    const action = {
      type: CANCEL_SELECT,
    }

    expect(
      cancelSelected({id: 3}, action)
    ).toEqual({
      type: CANCEL_SELECT,
      cancelItem: {id: 3}
    })
  })
});
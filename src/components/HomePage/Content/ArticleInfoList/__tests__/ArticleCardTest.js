import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter as Router } from 'react-router-dom';
import { deleteCard, selectCard } from "../../../../../redux/action/articleAction";
import { DELETE_ARTICLE, SELECT_CARD } from "../../../../../constants/constant";
import { ArticleCard } from "../ArticleCard";

Enzyme.configure({adapter: new Adapter()})
describe('ArticleInfoList component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <ArticleCard/>
      </Router>);
    expect(wrapper.find('.table').length).toBe(1);
  });

  it('should dispatch if choose a card', () => {
    const action = {
      type: SELECT_CARD,
    }

    expect(
      selectCard({id: 3}, action)
    ).toEqual({
      type: SELECT_CARD,
      cardSelected: {id: 3}
    })
  })

  it('should dispatch if delete a selected card', () => {
    const action = {
      type: DELETE_ARTICLE,
    }

    expect(
      deleteCard(3, action)
    ).toEqual({
      type: DELETE_ARTICLE,
      id: 3
    })
  })
});
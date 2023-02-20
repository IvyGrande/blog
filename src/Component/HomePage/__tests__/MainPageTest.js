import Enzyme, { shallow } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CommentModal from "../Comment/CommentModal";

Enzyme.configure({adapter: new Adapter()})
describe('Modal component', () => {
  it('should render correct components', () => {
    const wrapper = shallow(<CommentModal/>);

    expect(wrapper.find('.comment').length).toBe(1);
  });
})
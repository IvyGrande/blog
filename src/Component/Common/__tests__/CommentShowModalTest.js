import Enzyme, { shallow } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CommentShowModal from "../Comment/ListModal/CommentShowModal";

Enzyme.configure({adapter: new Adapter()})
describe('Modal component', () => {
  it('should render correct components', () => {
    const wrapper = shallow(<CommentShowModal/>);

    expect(wrapper.find('.showComment').length).toBe(1);
  });
})
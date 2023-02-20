import Enzyme, { shallow } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import NavBar from "../NavBar/NavBar";

Enzyme.configure({adapter: new Adapter()})
describe('Modal component', () => {
  it('should render correct components', () => {
    const wrapper = shallow(<NavBar/>);

    expect(wrapper.find('.navbar').length).toBe(1);
  });
})
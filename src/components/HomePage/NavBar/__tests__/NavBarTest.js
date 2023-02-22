import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { NavBar } from "../NavBar";
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()})
describe('Navbar component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <NavBar/>
      </Router>);
    expect(wrapper.find('.navbar').length).toBe(1);
  });
});
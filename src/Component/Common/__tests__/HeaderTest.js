import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from "../Header/Header";

Enzyme.configure({adapter: new Adapter()})
describe('Header component', () => {
  it('should render correct components', () => {
    const wrapper = mount(
      <Router>
        <Header />
      </Router>);
    expect(wrapper.find('.header').length).toBe(1);
  });
});
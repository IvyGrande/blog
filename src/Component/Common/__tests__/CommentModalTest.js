import Enzyme, { shallow } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {CommentModal }from "../Comment/CommentModal";

Enzyme.configure({adapter: new Adapter()})
describe('Modal component', () => {
  it('should render correct components', () => {
    const wrapper = shallow(<CommentModal />);

    expect(wrapper.find('.comment').length).toBe(1);
  });

  // it('simulates click addReply button', () => {
  //   const addReplyClickBtn = jest.fn();
  //   const wrapper = shallow(<CommentModal handleClick={addReplyClickBtn}/>);
  //   const addReplyBtn = wrapper.find('button').at(0);
  //
  //   addReplyBtn.simulate('click');
  //   expect(addReplyClickBtn).toHaveBeenCalled();
  // });


  it('Should set review to state when input is changed', () => {
    const container = shallow(<CommentModal/>);
    const input = container.find('Form.TextArea').at(0);
    input.simulate('change', {target: {value: "review"}});
    expect(container).toMatchSnapshot();
  });
  exports[`Index with enzyme Should set value to state when input is changed 1`] = `
  <input
    onChange={[Function]}
    value="review"
  />
`;

  it('Should set name to state when input is changed', () => {
    const container = shallow(<CommentModal/>);
    const input = container.find('input').at(0);
    input.simulate('change', {target: {value: "name"}});
    expect(container).toMatchSnapshot();
  });
  exports[`Index with enzyme Should set value to state when input is changed 1`] = `
  <input
    onChange={[Function]}
    value="name"
  />
`;

})
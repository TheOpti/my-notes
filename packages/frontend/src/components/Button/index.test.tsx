import React from "react";
import { mount } from 'enzyme';
import Button from './';

const noop = () => {};

describe('Button', () => {
  it('should render correctly without any issues', () => {
    const wrapper = mount(<Button 
      label="Label"
      onClickHandler={noop}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call onClickHandler function when button is actually clicked', () => {
    const mockFunction = jest.fn();

    const wrapper = mount(<Button 
      label="Label"
      onClickHandler={mockFunction}
      disabled
    />);

    wrapper.find('button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should render disabled button when "disabled" property is set to true', () => {
    const wrapper = mount(<Button 
      label="Label"
      onClickHandler={noop}
      disabled
    />);

    const containsDisabled = wrapper.find('button').html().includes('disabled');
    expect(containsDisabled).toBe(true);
  });
});
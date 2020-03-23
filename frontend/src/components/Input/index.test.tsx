import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input', () => {
  it('should render input with no props without crashing', () => {
    const wrapper = shallow(<Input label="Field" name="fieldName" />);
   
    expect(wrapper).toMatchSnapshot();
  });
});
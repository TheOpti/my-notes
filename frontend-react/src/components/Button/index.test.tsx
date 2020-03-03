import React from "react";
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
  it('should render correctly without any issues', () => {
    const wrapper = shallow(<Button 
      label="Label" 
      onClickHandler={() => {}} 
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
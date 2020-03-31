import React from "react";
import { mount } from 'enzyme';
import LoadingSpinner from './';

describe('LoadingSpinner', () => {
  it('should render correctly without any issues', () => {
    const wrapper = mount(<LoadingSpinner size="medium" />);

    expect(wrapper).toMatchSnapshot();
  });
});
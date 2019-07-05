import React from 'react';
import { mount } from 'enzyme';
import Button from '../lib/Button/Button';

describe('Button component', () => {
  it('Button on click', () => {
    const wrapper = mount(<Button>My Button</Button>);

    const button = wrapper.find('button');
    button.simulate('click');
    expect(button).toEqual(true);
  });
});

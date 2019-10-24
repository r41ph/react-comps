import React from 'react';
import { shallow } from 'enzyme';
import Button from '../lib/Button/Button';
import EmailIcon from '@material-ui/icons/Email';

describe('Button component', () => {
  it('Renders children text', () => {
    const wrapper = shallow(<Button>My Button</Button>);
    expect(wrapper.find('.rc-button').text()).toContain('My Button');
  });

  it('Small Button renders CSS class ".rc-button-sm"', () => {
    const wrapper = shallow(<Button size="sm">My Button</Button>);
    expect(wrapper.find('.rc-button-sm').length).toBe(1);
  });

  it('Medium Button renders CSS class ".rc-button-md"', () => {
    const wrapper = shallow(<Button size="md">My Button</Button>);
    expect(wrapper.find('.rc-button-md').length).toBe(1);
  });

  it('Large Button renders CSS class ".rc-button-lg"', () => {
    const wrapper = shallow(<Button size="lg">My Button</Button>);
    expect(wrapper.find('.rc-button-lg').length).toBe(1);
  });

  it('With icon renders ".rc-button__icon" CSS class', () => {
    const wrapper = shallow(
      <Button size="lg" icon={() => <EmailIcon />} aria-label="Email">
        My Button
      </Button>
    );
    expect(wrapper.find('.rc-button__icon').length).toBe(1);
  });

  it('With icon renders an icon', () => {
    const wrapper = shallow(
      <Button size="lg" icon={() => <EmailIcon />} aria-label="Email">
        My Button
      </Button>
    );
    expect(wrapper.find(EmailIcon).length).toBe(1);
  });

  it('Button with <a> tag', () => {
    const wrapper = shallow(
      <Button size="lg" href="/" aria-label="Email">
        My Button
      </Button>
    );
    expect(wrapper.type()).toEqual('a');
  });

  it('Button with <button> tag', () => {
    const wrapper = shallow(
      <Button size="lg" icon={() => <EmailIcon />} aria-label="Email">
        My Button
      </Button>
    );
    expect(wrapper.type()).toEqual('button');
  });
});

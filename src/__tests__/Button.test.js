import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../lib/Button/Button';
import EmailIcon from '@material-ui/icons/Email';

describe('Button component', () => {
  it('Button renders children', () => {
    const wrapper = shallow(<Button>My Button</Button>);
    expect(wrapper.text()).to.equal('My Button');
  });

  it('Button renders .rc-button-sm CSS class', () => {
    const wrapper = shallow(<Button size="sm">My Button</Button>);
    expect(wrapper.find('.rc-button-sm')).to.have.lengthOf(1);
  });

  it('Button renders .rc-button-md CSS class', () => {
    const wrapper = shallow(<Button size="md">My Button</Button>);
    expect(wrapper.find('.rc-button-md')).to.have.lengthOf(1);
  });

  it('Button renders .rc-button-lg CSS class', () => {
    const wrapper = shallow(<Button size="lg">My Button</Button>);
    expect(wrapper.find('.rc-button-lg')).to.have.lengthOf(1);
  });

  it('Button renders an icon', () => {
    const wrapper = shallow(
      <Button size="lg" icon={() => <EmailIcon />} aria-label="Email">
        My Button
      </Button>
    );
    expect(wrapper.find('.rc-button__icon')).to.have.lengthOf(1);
  });
});

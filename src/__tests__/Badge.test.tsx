import React from 'react';
import { mount, shallow } from 'enzyme';
import Badge from '../lib/Badge/Badge';
import EmailIcon from '@material-ui/icons/Email';

describe('Badge component', () => {
  it('Renders text prop as body text', () => {
    const wrapper = mount(<Badge text="Testing" />);
    const propText = wrapper.prop('text');
    expect(wrapper.find('.rc-badge').text()).toContain(propText);
  });

  it('Renders an icon', () => {
    const wrapper = shallow(<Badge text="Testing" icon={<EmailIcon />} />);
    expect(wrapper.find(EmailIcon).length).toBe(1);
  });
});

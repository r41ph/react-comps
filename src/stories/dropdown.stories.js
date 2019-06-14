import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Dropdown from '../lib/Dropdown/Dropdown';

const dropdownItems = [
  { value: "one" },
  { value: "two" }
]

storiesOf('Dropdown', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true

    },
  })
  .add('Custom dropdown', () => (
    <Dropdown
      items={dropdownItems}
      selectWidth="400px"
      bgColor="#e6e6e6" />
  ));

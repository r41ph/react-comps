import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SelectList from '../lib/SelectList/SelectList';

const selectListItems = [
  { value: "one" },
  { value: "two" }
]

storiesOf('SelectList', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true

    },
  })
  .add('Custom select list', () => (
    <SelectList
      items={selectListItems}
      selectWidth="400px"
      bgColor="#e6e6e6" />
  ));

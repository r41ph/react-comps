import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SelectList from '../lib/SelectList/SelectList';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const selectListItems = [
  { value: "Whoop" },
  { value: "Wow" },
  { value: "Yeap" },
  { value: "Yay!" }
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
      options={selectListItems}
      selectWidth="400px"
      bgColor="#e6e6e6"
      icon={KeyboardArrowDown}
      placeholder="Pick an option" />
  ));

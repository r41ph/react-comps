import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SelectList from '../lib/SelectList/SelectList';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const selectListItems = [
  { value: 'Yay!' },
  { value: 'Hooray' },
  { value: 'Whoop' },
  { value: 'Wow' },
  { value: 'Yeap' },
  { value: 'Woo-hoo' },
  { value: 'Aha!' }
];

function consoleLogSelected(selectState) {
  console.log('Selected option(s): ', selectState);
}

storiesOf('Select List', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true
    }
  })
  .add('Select list', () => (
    <SelectList
      options={selectListItems}
      selectWidth="400px"
      bgColor="#e6e6e6"
      icon={KeyboardArrowDown}
      placeholder="Pick an option"
      label="Select an option from the list"
      onChangeSelected={consoleLogSelected}
    />
  ))
  .add('Multi-select list', () => (
    <SelectList
      options={selectListItems}
      selectWidth="400px"
      bgColor="#e6e6e6"
      icon={KeyboardArrowDown}
      placeholder="Pick options"
      label="Select options from the list"
      isMultiSelect
      badgeBgColor="#FFCC00"
      onChangeSelected={consoleLogSelected}
    />
  ));

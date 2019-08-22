import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Tooltip, Button } from '../lib';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

storiesOf('Tooltip', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true
    }
  })
  .add('Tooltip basic', () => {
    const button = () => {
      return (
        <Button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          I'm a component!
        </Button>
      );
    };
    return (
      <>
        <Tooltip trigger="HTML Tooltip" width="200px">
          <ul>
            <li>Yay!</li>
            <li>Woop!</li>
          </ul>
        </Tooltip>
        <br />
        <br />
        <Tooltip trigger={button()} width="200px">
          Click me!
        </Tooltip>
        <br />
        <br />
        <Tooltip trigger="Just text trigger" width="200px">
          Some info here..
        </Tooltip>
      </>
    );
  })
  .add('Tooltip on Icon', () => (
    <Tooltip content="Reply All">
      <Button
        size="md"
        icon={ReplyAllIcon}
        aria-label="Reply All"
        iconSize={34}
      />
    </Tooltip>
  ));

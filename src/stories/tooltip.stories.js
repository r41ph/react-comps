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
  .add('Tooltip for text', () => {
    return (
      <>
        <Tooltip trigger="Just text trigger" type="text">
          Some info here..
        </Tooltip>
        <br />
        <br />
        Toffee marzipan icing. Pudding jelly chocolate bar marzipan tiramisu.
        Biscuit sesame snaps{' '}
        <Tooltip trigger="chocolate" type="text" placement="top">
          Chocolate info here..
        </Tooltip>{' '}
        beans pastry cake halvah.
      </>
    );
  })
  .add('Tooltip with a component', () => {
    const button = () => {
      return (
        <Button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          I'm a Button!
        </Button>
      );
    };
    const icon = () => {
      return (
        <Button
          size="md"
          icon={ReplyAllIcon}
          aria-label="Reply All"
          iconSize={34}
        />
      );
    };
    return (
      <>
        <Tooltip trigger={button()}>Click me!</Tooltip>
        <br />
        <br />
        <Tooltip trigger={icon()}>Reply All</Tooltip>
      </>
    );
  })
  .add('Tooltip with HTML', () => {
    return (
      <Tooltip trigger="HTML Tooltip">
        <ul>
          <li>Yay!</li>
          <li>Woop!</li>
        </ul>
      </Tooltip>
    );
  })
  .add('Tooltip with fixed width', () => {
    return (
      <Tooltip trigger="With fixed width" width="20rem" placement="bottom">
        <p>
          Toffee marzipan icing. Pudding jelly chocolate bar marzipan tiramisu.
          Biscuit sesame snaps jelly beans pastry cake halvah. Tootsie roll
          cookie jelly jelly-o dragée cotton candy chocolate lollipop. Oat cake
          croissant gummies.
        </p>
      </Tooltip>
    );
  });

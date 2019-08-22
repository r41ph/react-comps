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
    const icon = () => {
      return <Button icon={ReplyAllIcon} />;
    };
    return (
      <>
        <Tooltip trigger="HTML Tooltip">
          <ul>
            <li>Yay!</li>
            <li>Woop!</li>
          </ul>
        </Tooltip>
        <br />
        <br />
        <Tooltip trigger={button()}>Click me!</Tooltip>
        <br />
        <br />
        <Tooltip trigger={icon()}>Reply All</Tooltip>
        <br />
        <br />
        <Tooltip trigger="Just text trigger">Some info here..</Tooltip>
        <br />
        <br />
        <Tooltip trigger="With width" width="200px">
          <p>
            Toffee marzipan icing. Pudding jelly chocolate bar marzipan
            tiramisu. Biscuit sesame snaps jelly beans pastry cake halvah.
            Tootsie roll cookie jelly jelly-o dragée cotton candy chocolate
            lollipop. Oat cake croissant gummies.
          </p>
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

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
  .add('Text trigger', () => {
    return (
      <>
        <Tooltip trigger="Just text trigger" type="text">
          Some info here..
        </Tooltip>
        <br />
        <br />
        Biscuit sesame snaps{' '}
        <Tooltip trigger="chocolate" type="text" placement="top">
          Chocolate info here..
        </Tooltip>{' '}
        beans pastry cake halvah.
      </>
    );
  })
  .add('With a component', () => {
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
  .add('With HTML', () => {
    return (
      <Tooltip trigger="HTML Tooltip">
        <h4 style={{ marginBottom: '5px' }}>Heading</h4>
        <p style={{ marginTop: '0px' }}>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Pudding
          </a>{' '}
          jelly<i> chocolate</i> bar <br />
          <b>marzipan</b> tiramisu.
        </p>
      </Tooltip>
    );
  })
  .add('With fixed width', () => {
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
  })
  .add('Open on click', () => {
    return (
      <p>
        Tootsie roll{' '}
        <Tooltip
          trigger="cookie jelly"
          triggerOnClick
          type="text"
          placement="top"
        >
          Info cookie jelly
        </Tooltip>{' '}
        dragée cotton.
      </p>
    );
  })
  .add('Placement options', () => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 3,
          gridRowGap: '60px'
        }}
      >
        <div></div>
        <div>
          <Tooltip width="160px" trigger="TOP-START" placement="top-start">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="TOP" placement="top">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="TOP-END" placement="top-end">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div></div>
        <div></div>
        {/* RIGHT */}
        <div>
          <Tooltip width="160px" trigger="RIGHT-START" placement="right-start">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="RIGHT" placement="right">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="RIGHT-END" placement="right-end">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div></div>
        <div></div>
        {/* BOTTOM */}
        <div>
          <Tooltip
            width="160px"
            trigger="BOTTOM-START"
            placement="bottom-start"
          >
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="BOTTOM" placement="bottom">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="BOTTOM-END" placement="bottom-end">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div></div>
        <div></div>
        {/* LEFT */}
        <div>
          <Tooltip width="160px" trigger="LEFT-START" placement="left-start">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="LEFT" placement="left">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
        <div>
          <Tooltip width="160px" trigger="LEFT-END" placement="left-end">
            Cupcake ipsum dolor sit amet sugar plum bear.
          </Tooltip>
        </div>
      </div>
    );
  });

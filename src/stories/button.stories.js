import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../lib';

import LaunchIcon from '@material-ui/icons/Launch';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,

      source: true
    }
  })
  .add('Types', () => (
    <div className="rc-story story-buttons-types">
      <Button size="md">Button</Button>
      <Button size="md" href="/" target="_blank">
        Anchor
      </Button>
    </div>
  ))
  .add('Sizes', () => (
    <div className="rc-story story-buttons-sizes">
      <Button size="sm">Button Small</Button>
      <Button size="md">Button Medium</Button>
      <Button size="lg">Button Large</Button>
      <Button size="full-width">Button Full Width</Button>
    </div>
  ))
  .add('With icon', () => (
    <div className="rc-story story-buttons-with-icon">
      <Button
        size="sm"
        icon={<LaunchIcon />}
        textSize="12px"
        className="custom-class-here"
      >
        Button Small
      </Button>
      <Button size="md" icon={<LaunchIcon />} iconSize="20px">
        Button Medium
      </Button>
      <Button size="lg" icon={<LaunchIcon />} iconSize="28px" textSize="22px">
        Button Large
      </Button>
      <Button size="full-width" icon={<LaunchIcon />} iconSize="20px">
        Button Full Width
      </Button>
    </div>
  ))
  .add('Just icon', () => (
    <div className="rc-story story-buttons-just-icon">
      <h3>Button</h3>
      <div className="buttons">
        <Button
          size="sm"
          icon={<LaunchIcon />}
          aria-label="Launch"
          iconSize="20px"
        />
        <Button
          size="md"
          icon={<AssignmentIcon />}
          aria-label="Assignment"
          iconSize="23px"
        />
        <Button
          size="lg"
          icon={<EmailIcon />}
          aria-label="Email"
          iconSize="28px"
        />
      </div>
      <h3>Anchor link</h3>
      <div className="anchors">
        <Button
          size="sm"
          href={'/'}
          target="_blank"
          icon={<LaunchIcon />}
          aria-label="Launch"
          iconSize="20px"
        />
        <Button
          size="md"
          href={'/'}
          target="_blank"
          icon={<AssignmentIcon />}
          aria-label="Assignment"
          iconSize="23px"
        />
        <Button
          size="lg"
          href={'/'}
          target="_blank"
          icon={<EmailIcon />}
          aria-label="Email"
          iconSize="28px"
        />
      </div>
    </div>
  ));

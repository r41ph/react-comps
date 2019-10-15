import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Badge } from '../lib';
import AssignmentIcon from '@material-ui/icons/Assignment';

storiesOf('Badge', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true
    }
  })
  .add('Basic', () => (
    <div className="rc-story">
      <Badge text="Blueberry" bgColor="purple" />
      <br />
      <Badge text="Banana" bgColor="yellow" />
      <br />
      <Badge text="Strawberry" />
    </div>
  ))
  .add('Custom icon', () => (
    <div className="rc-story">
      <Badge text="Task one" icon={<AssignmentIcon />} />
    </div>
  ))
  .add('Custom title', () => (
    <div className="rc-story">
      <Badge text="Strawberry" title="I'm a badge!" />
    </div>
  ));

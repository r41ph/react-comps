import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import { CircularNavigation, Button } from '../lib';

import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import LaunchIcon from "@material-ui/icons/Launch"
import Dropdown from '../lib/Dropdown/Dropdown';


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
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
  .add('Custom dropdown', () => <Dropdown items={dropdownItems} />)


storiesOf('CircularNavigation', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      source: true

    },
  })
  .add('With overlay', () => (
    <div>
      <CircularNavigation overlay={true}>
        <CircularNavigation.item href={'#'} icon={<HomeIcon />}>Home</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AnnouncementIcon />}>About</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AssignmentIcon />}>Projects</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<BuildIcon />}>Labs</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<EmailIcon />}>Contact</CircularNavigation.item>
      </CircularNavigation>
    </div>
  ))
  .add('No overlay', () => (
    <div>
      <CircularNavigation>
        <CircularNavigation.item href={'#'} icon={<HomeIcon />}>Home</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AnnouncementIcon />}>About</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AssignmentIcon />}>Projects</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<BuildIcon />}>Labs</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<EmailIcon />}>Contact</CircularNavigation.item>
      </CircularNavigation>
    </div>
  ));


storiesOf('Button', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,

      source: true
    },
  })
  .add('Types', () => (
    <div className="rc-story story-buttons-types">
      <Button size="md">Button</Button>
      <Button size="md" href="/" target="_blank">Anchor</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div className="rc-story story-buttons-sizes">
      <Button size="sm">Button Small</Button>
      <Button size="md">Button Medium</Button>
      <Button size="lg">Button Large</Button>
      <Button size="full-width">Button Full-width</Button>
    </div>
  ))
  .add('With icon', () => (
    <div className="rc-story story-buttons-with-icon">
      <Button size="sm" icon={LaunchIcon} className="custom-class-here">
        Button Small
      </Button>
      <Button size="md" icon={LaunchIcon}>
        Button Medium
      </Button>
      <Button size="lg" icon={LaunchIcon}>
        Button Large
      </Button>
      <Button size="full-width" icon={LaunchIcon}>
        Button Full-width
      </Button>
    </div>
  ))
  .add('Just icon', () => (
    <div className="rc-story story-buttons-just-icon">
      <h3>Button</h3>
      <div className="buttons">
        <Button size="sm" icon={LaunchIcon} />
        <Button size="md" icon={AssignmentIcon} />
        <Button size="lg" icon={EmailIcon} />
      </div>
      <h3>Anchor link</h3>
      <div className="anchors">
        <Button size="sm" href={"/"} target="_blank" icon={LaunchIcon} />
        <Button size="md" href={"/"} target="_blank" icon={AssignmentIcon} />
        <Button size="lg" href={"/"} target="_blank" icon={EmailIcon} />
      </div>
    </div>
  ));
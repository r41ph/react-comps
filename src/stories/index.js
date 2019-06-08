import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import { CircularNavigation, Button } from '../lib';

import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';


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

storiesOf('CircularNavigation', module)
  .add('With overlay', () => (
    <>
      <CircularNavigation overlay={true}>
        <CircularNavigation.item href={'#'} icon={<HomeIcon />}>Home</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AnnouncementIcon />}>About</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AssignmentIcon />}>Projects</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<BuildIcon />}>Labs</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<EmailIcon />}>Contact</CircularNavigation.item>
      </CircularNavigation>

      <p style={{ margin: 150 }}>
        Ice cream candy tiramisu marshmallow chocolate gummi bears candy oat cake gummies. Pudding cupcake icing sweet roll apple pie icing. Icing tart sweet roll carrot cake macaroon lollipop icing. Tart brownie cotton candy chocolate bar chupa chups soufflé muffin. Caramels cookie chupa chups candy. Chocolate cake chocolate cake muffin sweet roll tootsie roll lemon drops lemon drops. Oat cake sweet sweet roll candy canes cake. Chocolate cake sweet cotton candy. Jelly jelly-o liquorice jelly-o dragée bonbon. Jujubes chocolate bar halvah topping chocolate cake jujubes. Toffee halvah carrot cake liquorice tiramisu cheesecake. Jelly-o muffin toffee jelly beans. Chocolate bar tootsie roll jelly-o jelly.
    </p>
    </>
  ))
  .add('No overlay', () => (
    <>
      <CircularNavigation>
        <CircularNavigation.item href={'#'} icon={<HomeIcon />}>Home</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AnnouncementIcon />}>About</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<AssignmentIcon />}>Projects</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<BuildIcon />}>Labs</CircularNavigation.item>
        <CircularNavigation.item href={'#'} icon={<EmailIcon />}>Contact</CircularNavigation.item>
      </CircularNavigation>

      <p style={{ margin: 150 }}>
        Ice cream candy tiramisu marshmallow chocolate gummi bears candy oat cake gummies. Pudding cupcake icing sweet roll apple pie icing. Icing tart sweet roll carrot cake macaroon lollipop icing. Tart brownie cotton candy chocolate bar chupa chups soufflé muffin. Caramels cookie chupa chups candy. Chocolate cake chocolate cake muffin sweet roll tootsie roll lemon drops lemon drops. Oat cake sweet sweet roll candy canes cake. Chocolate cake sweet cotton candy. Jelly jelly-o liquorice jelly-o dragée bonbon. Jujubes chocolate bar halvah topping chocolate cake jujubes. Toffee halvah carrot cake liquorice tiramisu cheesecake. Jelly-o muffin toffee jelly beans. Chocolate bar tootsie roll jelly-o jelly.
    </p>
    </>
  ));


storiesOf('Button', module)
  .add('Button sizes', () => (
    <>
      <Button size="sm" href="/">Button Small</Button>
      <Button size="md">Button Medium</Button>
      <Button size="lg">Button Large</Button>
      <Button size="full-width">Button Full-width</Button>
    </>
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { CircularNavigation } from '../lib';

import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';

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

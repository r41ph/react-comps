import React from 'react';
import { render } from "react-dom";
import {
  CircularNavigation,
  Button
} from "./lib/";

const App = () => (
  <>
    <CircularNavigation overlay={true}>
      <CircularNavigation.item href={'#'} icon={"home"}>Home</CircularNavigation.item>
      <CircularNavigation.item href={'#'} icon={"announcement"}>About</CircularNavigation.item>
      <CircularNavigation.item href={'#'} icon={"assignment"}>Projects</CircularNavigation.item>
      <CircularNavigation.item href={'#'} icon={"build"}>Labs</CircularNavigation.item>
      <CircularNavigation.item href={'#'} icon={"email"}>Contact</CircularNavigation.item>
    </CircularNavigation>
    <Button onClick={() => { console.log('Button clicked') }}>myButton</Button>
  </>
);

render(<App />, document.getElementById("root"));

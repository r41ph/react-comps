import React from 'react';
import { render } from "react-dom";
import CircularNavigation from "./lib/CircularNavigation/CircularNavigation";

const App = () => (
  <CircularNavigation overlay={true}>
    <CircularNavigation.item href={'#'} icon={"home"}>Home</CircularNavigation.item>
    <CircularNavigation.item href={'#'} icon={"announcement"}>About</CircularNavigation.item>
    <CircularNavigation.item href={'#'} icon={"assignment"}>Projects</CircularNavigation.item>
    <CircularNavigation.item href={'#'} icon={"build"}>Labs</CircularNavigation.item>
    <CircularNavigation.item href={'#'} icon={"email"}>Contact</CircularNavigation.item>
  </CircularNavigation>
);

render(<App />, document.getElementById("root"));

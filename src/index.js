import React from 'react';
import { render } from "react-dom";
import { CircularNavigation } from "./lib";

const App = () => (
  <CircularNavigation />
);

render(<App />, document.getElementById("root"));

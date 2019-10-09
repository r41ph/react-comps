import React from 'react';
import { render } from "react-dom";
import { Button } from "./lib";

const App = () => (
  <Button onClick={() => { console.log('Button clicked') }}>myButton</Button>
);

render(<App />, document.getElementById("root"));

# react-comps

Personal library of React components

## Usage

```
$ npm i react-comps
```

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-comps";
import LaunchIcon from "@material-ui/icons/Launch";

function App() {
  return (
    <Button size="sm" icon={LaunchIcon}>
      Button Small
    </Button>
  );
}

export default App;
```

## Demo

https://r4lfl4b.github.io/react-comps

## Development

To start the development server (with entry point `src/index.js`), run

```
$ npm start
```

To start the Storybook components explorer

```
$ npm run storybook
```

## Publish Storybook to Github Pages

```
$ npm run deploy-storybook
```

## Publish package to npm

To transpile `src/lib` and create a build in the `dist` folder, run:

```
$ npm run build
```

Publish:

```
$ npm publish
```

- Note that only README.md and the dist folders are published to npm.

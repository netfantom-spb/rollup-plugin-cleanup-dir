Automatically empty the `output.dir` folder before writing a new bundle.

**Only rollup3 is supported!**

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Features](#features)

## Getting started <a name = "getting_started"></a>

Use this plugin with the bundler [Rollup](https://rollupjs.org).

### Installation

```sh
$ npm i rollup-plugin-clean-dir -D
```

## Usage <a name = "usage"></a>

```javascript
// rollup.config.js

import { cleanupDir } from 'rollup-plugin-cleanup-dir'

export default {
  input: '....',
  output: {
    dir: '...',
  },
  plugins: [cleanupDir()]
}
```

This Rollup plugin has no options, it just empties the `dir` folder during the build process, right before Rollup writes any files.


## Features <a name = "features"></a>

### TypeScript Definitions <a name = "typescript"></a>

TypeScript definitions are included, so no need to install an additional `@types` library!


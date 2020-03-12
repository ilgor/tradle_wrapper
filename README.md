# Usage

## Wrapper Short

- This is the wrapper implementation using using node.js 'util'
  This can be imported as `const { wrap } = require("./wrapper_short");`
- if used without importing, promisify call methods need to be changed
  from `promisify(lowLevelStorage.get)` to `promisify(lowLevelStorage.get())`

## Wrapper

- This can be imported as `const { wrap } = require("./wrapper_short");`

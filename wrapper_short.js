/*
    This is the wrapper implementation using using node.js 'util'
    This can be imported as `const { wrap } = require("./wrapper_short");`
    if used without importing promisify call methods need to be changed 
    from promisify(lowLevelStorage.get) to promisify(lowLevelStorage.get())
*/

const { promisify } = require("util");

const wrap = lowLevelStorage => {
  return {
    get(key) {
      const getPromisified = promisify(lowLevelStorage.get);
      return getPromisified(key);
    },

    put(key, value) {
      const putPromisified = promisify(lowLevelStorage.put);
      return putPromisified(key, value);
    },

    del(key) {
      const delPromisified = promisify(lowLevelStorage.del);
      return delPromisified(key);
    },

    batchPut(arr) {
      const batchPutPromisified = promisify(lowLevelStorage.batchPut);
      return batchPutPromisified(arr);
    }
  };
};

exports.wrap = wrap;

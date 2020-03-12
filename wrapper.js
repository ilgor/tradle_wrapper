const wrap = lowLevelStorage => {
  return new MyClass(lowLevelStorage);
};

class MyClass {
  constructor(lowLevelStorage) {
    this.obj = lowLevelStorage;
  }

  get(key) {
    if (!key) {
      return Promise.reject("Empty Key");
    }

    return new Promise((resolve, reject) =>
      this.obj.get(key, (error, data) => {
        error ? reject(error) : resolve(data);
      })
    );
  }

  put(key, value) {
    if (!key && !value) {
      return Promise.reject("Empty Key and Value");
    }
    if (!key) {
      return Promise.reject("Empty Key");
    }
    if (!value) {
      return Promise.reject("Empty Value");
    }

    return new Promise((resolve, reject) =>
      this.obj.put(key, value, (error, data) =>
        error ? reject(error) : resolve(data)
      )
    );
  }

  del(key) {
    if (!key) {
      return Promise.reject("Empty Key");
    }

    return new Promise((resolve, reject) =>
      this.obj.del(key, (error, data) =>
        error ? reject(error) : resolve(data)
      )
    );
  }

  batchPut(arr) {
    if (arr.length === 0) {
      return Promise.reject("Empty Batch Input");
    }
    if (arr.length === 1) {
      return this.put(arr[0].key, arr[0].value);
    }

    let promises = [];
    arr.forEach(p => promises.push(this.put(p.key, p.value)));
    return Promise.all(promises);
  }
}

exports.wrap = wrap;

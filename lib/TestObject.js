class TestObject {
  flag = false;

  setFlag(value) {
    if (typeof value !== 'boolean') {
      throw 'the flag value must be a boolean';
    }
    this.flag = value;
  }

  getFlag() {
    return this.flag;
  }
}

export default TestObject;

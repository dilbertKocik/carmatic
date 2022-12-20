import TestObject from "../../lib/TestObject.js";

describe('TestObject', function() {
    let testObject;
    beforeEach(function() {
      testObject = new TestObject();
    });
  
    it('should default the flag to false', function() {
      expect(testObject.flag).toEqual(false);
    });
  
    it('should have a set method that changes the value of the flag', function() {
      testObject.setFlag(true)
      expect(testObject.flag).toEqual(true);
    });
  
    it('should have a set method that throws an error if the value is not a boolean', function() {
      try {
        testObject.setFlag('testString')
      } catch (ex) {
        expect(ex).toEqual('the flag value must be a boolean');
      }
    });
  });
  
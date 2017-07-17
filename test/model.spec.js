'use strict';

// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();
let expect = chai.expect;

// Import the Model class.
let Model = require(path.join(__dirname, '..', 'site/js/pattern/model.js'));
Model = Model.Model;

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.
describe('Model', () => {

  let model;

  beforeEach(() => {
    // Create a new model object before every test.
    model = new Model();
  });
  
  describe('#updateData()', () => {
    it('throws error if string argument', () => {
      expect(() => model.updateData('z')).to.throw('"data" must be an object.');
    });
    it('is an object argument', () => {
      expect(() => model.updateData({'a':'1'})).to.not.throw('"data" must be an object.');
    });
  });

  describe('#data', () => {

    // this will fail if data is not object    
    it('is an object', () => {
      expect(model.data).to.be.a('object');
    });

    // verify that object can be updated
    it('can be changed', () => {
      model.data = {'name': 'test'};
      model.data.should.deep.equal({'name': 'test'});
    }); 


  });
});
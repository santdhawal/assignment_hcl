'use strict';
/** Class representing a Model. */
class Model {
  /**
   * Create a model.
   */
  constructor(){
    this.data = {};
    this.observers = [];
    this.sparklineData = [];
  }

  /**
   * @method updateData - Creates a updateData for Model
   * @param {object} - update data and notify observers
   */
  updateData(data) {
    if (typeof data !== 'object') {
      throw new Error('"data" must be an object.');
    }
    this.sendNotification(data);
  }

  /**
   * @method - Sends notification to all observers
   * @param {object} - data passed to notify observers
   */
  sendNotification(data){
    if (typeof data !== 'object') {
      throw new Error('"data" must be an object.');
    }
    let observersLength = this.observers.length;
    for(let i = 0; i < observersLength; i++){
        this.observers[i].notify(data);
    }
  }

  /**
   * @method - Registers a new observer
   * @param {object} - the observer to be added
   */
  addObserver(observer){
      this.observers.push(observer);
  };
}

/** module that exports Model */
exports.Model = Model;

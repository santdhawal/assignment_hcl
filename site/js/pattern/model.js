'use strict';

class Model {
  constructor(){
    this.data = {};
    this.observers = [];
    this.sparklineData = [];
  }

  updateData(data) {
    if (typeof data !== 'object') {
      throw new Error('"data" must be an object.');
    }
    this.sendNotification(data);
  }

  // Notify all observers
  sendNotification(data){
    if (typeof data !== 'object') {
      throw new Error('"data" must be an object.');
    }
    let observersLength = this.observers.length;
    for(let i = 0; i < observersLength; i++){
        this.observers[i].notify(data);
    }
  }

  // register observer
  addObserver(observer){
      this.observers.push(observer);
  };
}

exports.Model = Model;

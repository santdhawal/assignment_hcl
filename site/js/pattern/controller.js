'use strict';

class Controller {
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
  }
  // notify event - fired when model update
  notify(data) {
    this.model.data = data; // update model data
    this.view.render(); // update view
  }
}

exports.Controller = Controller;

'use strict';

/** Class representing a Controller. */
class Controller {
  /**
   * Create a controller.
   * @param {obj} model - model object
   * @param {obj} view - view object
   */
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
  }

  /**
   * @method - Update model and view when model update
   * @param {object} - data passed to notify observers
   */
  notify(data) {
    this.model.data = data; // update model data
    this.view.render(); // update view
  }
}

/** module that exports Controller */
exports.Controller = Controller;

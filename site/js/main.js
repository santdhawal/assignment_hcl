'use strict';

// Importing the modules
const { Model } = require('./pattern/model.js');
const { View } = require('./pattern/view.js');
const { Controller } = require('./pattern/controller.js');

/** Class representing a Main. */
class Main {
  /**
   * Creates a main object.
   * @constructor
   */
  
  /**
   * @method init - it is used to subscribe to Stomp client
   * @param client - Stomp reference
   */  
  init(client) {
    const model = new Model(); // Instantiate Model
    const view = new View(model, document.getElementsByTagName("tbody")[0]); // Instantiate View
    const controller = new Controller(model, view); // Instantiate Controller

    const subscription = client.subscribe("/fx/prices", function(message){
      const data = JSON.parse(message.body);
      model.updateData(data);
    });    
  }

  /**
   * @method error - it is used to signify Stomp connectivity error
   * @param error - Stomp error message
   */ 
  error(error){
  	document.getElementById('stompStatus').style.background = 'red';
  }

}

/** module that exports Main instance */
exports.main = new Main();

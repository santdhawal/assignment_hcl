'use strict';

// Importing the modules
const { Model } = require('./pattern/model.js');
const { View } = require('./pattern/view.js');
const { Controller } = require('./pattern/controller.js');

class Main {
  
  init(client) {
    const model = new Model(); // Instantiate Model
    const view = new View(model, document.getElementsByTagName("tbody")[0]); // Instantiate View
    const controller = new Controller(model, view); // Instantiate Controller

    const subscription = client.subscribe("/fx/prices", function(message){
      const data = JSON.parse(message.body);
      model.updateData(data);
    });
    
  }
}

exports.main = new Main();

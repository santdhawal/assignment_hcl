/**
 * This javascript file will constitute the entry point of your solution.
 *
 * Edit it as you need.  It currently contains things that you might find helpful to get started.
 */

// This is not really required, but means that changes to index.html will cause a reload.
require('./site/index.html')
// Apply the styles in style.css to the page.
require('./site/style.css')
// Importing the main module
const { main } = require('./site/js/main.js');

// Change this to get detailed logging from the stomp library
global.DEBUG = false;

const url = "ws://localhost:8011/stomp";
const client = Stomp.client(url);
client.debug = function(msg) {
  if (global.DEBUG) {
    console.info(msg);
  }
};

// once connection is established, initialize
const connectCallback = function() {
  main.init(client);
};

// if not able to establish connection
const errorCallback = function(error){
	main.error(error);
};

client.connect({}, connectCallback, errorCallback);
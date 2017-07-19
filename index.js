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


/**
 * This callback is used as Stomp connection success.
 * @callback connectCallback
 */
const connectCallback = function() {
	// once connection is established, initialize
  	main.init(client);
};

/**
 * This callback is used as Stomp connection failure.
 * @callback errorCallback
 */
const errorCallback = function(error){
	// if not able to establish connection
	main.error(error);
};

client.connect({}, connectCallback, errorCallback);
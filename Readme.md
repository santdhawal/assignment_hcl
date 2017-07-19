DB Updating Table Dev Challenge
===============================

This module contains a development challenge for DB recruitment.

The instructions are in the site/index.html file.

To view them, run

```
npm install
npm start
```

from within this directory.  This will start a development server (using webpack)
that supports hot reloading but also provides a stomp/ws endpoint providing fake
fx updates.

Once you've started the development server, navigate to http://localhost:8011
to read the task description and get started.


## Implementation :

##### Observer pattern 

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. The Observer pattern facilitates good object-oriented design and promotes loose coupling. The pattern implementation can be found under `site\js\pattern` directory .

Each `*.js` file inside defines respective class and is imported as modules when required. Below files have been created. 
- ##### model.js
  - It defines the `Model class`. The object of this class is used to  set / update the data, and notify all the registered observer when the data change event occurs.

- ##### view.js
   - It defines the `View class`. The object of this class is used to display the table which is sorted. Also the last column of the row has sparkline graph, which is render in the view 

    - Sparkline chart for each row will appear when the overall values in array are more than 1. If there is no value in array, it wont display at all. If there is 1 value present, a single dot is displayed.

- ##### controller.js
    - It defines the `Controller class`. This class is used to notify the model changes to view and update view accordingly.

##### Other JS files


- ##### main.js
    -  It defines the `Main class` and is entry point for application execution. The initialization takes place through this class once connection to `Stomp client` is successfull.
    -  It is also responsible to keep the UI updated for `Stomp server status`
    -  The subscription to `Stomp client` takes place in this class initialize method. Once done, the model values keeps updating after every 1 second.

- ##### sparklineGraph.js
    - It defines the `SparklineGraph class`. It registers itself as an observer to the model changes and get model updates whenever a change is there. 
    - It generates sparkline graph and renders the view
    - It reset sparkline every 30 sec.

### Unit testing
- `Chai` and `Mocha` node modules are installed & saved as developer dependency for unit testing.
- The test specification file is present under `test` directory.
- Unit test case for `Model.js` has been written in `model.spec.js`. This file sits in `test` directory.

##### Running the test
- To run test easier I have configured the `package.json` file. It is also configured to run test for ES6 implementation.
Use the below command to run unit tests. 
- Make user you are in the same directory which contains `package.json`

##### Command to run test
```
npm test
```

- The above command will read the `*.spec.js` files inside `test` folder and execute unit test cases.
- The output will be displayed on console itself.
- If all the test are passed, you can see all check marks and overall execution time.
- If any test fail, you will see the fail summary as well on the console.



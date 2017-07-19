'use strict';

/** Class representing a Sparkline graph. */
class SparklineGraph {
  /**
   * Create a sparklinegraph.
   * @param {obj} element - document object to render graph
   * @param {obj} model - model object
   */
  constructor(element, model) {
    this.model = model;
    this.element = element;
    this.dataArray = [];
    this.sparkline = null;
    this.model.addObserver(this);
    this.plot();
  }

  /**
   * @method - to create instance & draw the graph
   */
  plot() {
    if(this.sparkline == null) {
      this.sparkline = new Sparkline(this.element); // create instance of sparkline
    }
    this.draw();
  }

  /**
   * @method - to draw the graph
   */
  draw(){
    this.sparkline.draw(this.dataArray); // draw sparkline with dataArray
  }

  /**
   * @method - to set 30 second interval
   */
  setIntervals(){
    const self = this;
    // reset in 30 seconds
    this.interval = setInterval(function () {
        self.clearIntervals();
        self.reset();
    }, 30000);
  }

  /**
   * @method - to clear previous set interval
   */
  clearIntervals(){
    clearInterval(this.interval);
  }

  /**
   * @method - to reset data & graph
   */
  reset(){
    this.plot();
    this.dataArray = [];    
  };

  /**
   * @method - to update graph when notified of data update
   * @param {obj} - updated data object
   */
  notify(data) {
    if("spark_"+data.name === this.element.id) {
      this.dataArray.push((data.bestBid + data.bestAsk) / 2);
      if(this.dataArray.length === 1) {
        this.setIntervals();
      }
    }
    this.draw();
  };
}

/** module that exports Sparkline graph */
exports.SparklineGraph = SparklineGraph;

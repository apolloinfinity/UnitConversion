// document.getElementById("output").style.visibility = "hidden";
// document.getElementById("lbsInput").addEventListener("input", function(e) {
//   document.getElementById("output").style.visibility = "visible";
//   let lbs = e.target.value;
//   document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
//   document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
//   document.getElementById("ozOutput").innerHTML = lbs * 16;
// });


var Conversion;

const UIController = (function() {
  'use strict';
  const OutputStrings = {
    inputNum: "#UnitInput",
    outputCent: "#centOutput",
    outputKilos: "#kiloOutput",
    outputImperial: "#imperialOutput",
    outputPane: "#output"
  };

  const UnitStrings = {
    mass: "#mass",
    length: "#length",
    volume: "#volume"
  }

  return {
    getDOMStrings: function() {
      return OutputStrings;
    },
    getUnitStrings: function(){
      return UnitStrings;
    }
  };
})();

// For testing
// UIController.getInput();

const controller = (function(UICtrl) {
  const setUpListners = function() {
    // Acces object inside of UIController
    const DOM = UIController.getDOMStrings();
    const Unit = UIController.getUnitStrings();

    // 
    const inputVal = document.querySelector(DOM.inputNum);
    inputVal.addEventListener('input', function(e){
      let inputValue = e.target.value
      document.querySelector(DOM.outputCent).innerHTML = (inputValue/ 0.022046).toFixed(2);
      document.querySelector(DOM.outputKilos).innerHTML =(inputValue / 2.2046).toFixed(2) ;
      document.querySelector(DOM.outputImperial).innerHTML = (inputValue * 16).toFixed(2);
    })
    
    const massSelect = document.querySelector(Unit.mass).addEventListener('click', function(){
      document.querySelector('#cent').innerHTML = "Grams: ";
    })

    const lengthSelect = document.querySelector(Unit.length).addEventListener('click', function (){
      document.querySelector("#cent").innerHTML = "Liters: "
    })

    if 

  };

  // const ctrlUpdate = function(){ 
  //   const input = UICtrl.getInput();
  //   console.log(input)
  // }
  return {
    init: function() {
      console.log("App started.");
      setUpListners();
      // ctrlUpdate();
    }
  };
})(UIController);

controller.init();

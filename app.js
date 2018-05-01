// document.getElementById("output").style.visibility = "hidden";
// document.getElementById("lbsInput").addEventListener("input", function(e) {
//   document.getElementById("output").style.visibility = "visible";
//   let lbs = e.target.value;
//   document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
//   document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
//   document.getElementById("ozOutput").innerHTML = lbs * 16;
// });


/*
Formulas for conversions.
Centimeters = feet * 30.48
Meters = feet * 0.3048
Kilo Meters

*/
'use strict';

var Conversion;

const UIController = (function () {

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

  const UnitNames = {
    grams: "Grams: ",
    kgrams : "Kilograms: ",
    oz: "Ounces: ",
    cmeter: "Centimeters: ",
    meters: "Meters: ",
    kmeters: "Kilometers: ",
    inches: "Inches: ",
    mliters: "Milliter: ",
    liters: "Liters: ",
    quart: "Quart: "
  }

  return {
    getDOMStrings: function () {
      return OutputStrings;
    },
    getUnitStrings: function () {
      return UnitStrings;
    },
    getUnitNames: function(){
      return UnitNames;
    }
  };
})();

// For testing
// UIController.getInput();

const controller = (function (UICtrl) {
  const setUpListners = function () {
    // Acces object inside of UIController
    const DOM = UIController.getDOMStrings();
    const Unit = UIController.getUnitStrings();
    const UnitNames = UIController.getUnitNames();
    const inputVal = document.querySelector(DOM.inputNum);

    const massSelect = document.querySelector(Unit.mass).addEventListener('click', function () {
      document.querySelector(DOM.outputCent).innerHTML = UnitNames.grams;
      document.querySelector(DOM.outputKilos).innerHTML = UnitNames.kgrams;
      document.querySelector(DOM.outputImperial).innerHTML = UnitNames.oz;

      console.log("Clicked mass button");
    })

    const lengthSelect = document.querySelector(Unit.length).addEventListener('click', function () {
      document.querySelector(DOM.outputCent).innerHTML = UnitNames.cmeter;
      document.querySelector(DOM.outputKilos).innerHTML = UnitNames.kmeters;
      document.querySelector(DOM.outputImperial).innerHTML = UnitNames.inches;

      console.log("Clicked length button");
    })

    const volumeSelect = document.querySelector(Unit.volume).addEventListener('click', function () {
      document.querySelector(DOM.outputCent).innerHTML = UnitNames.cmeter;
      document.querySelector(DOM.outputKilos).innerHTML = UnitNames.kmeters;
      document.querySelector(DOM.outputImperial).innerHTML = UnitNames.inches;

      console.log("Clicked volume button");
    })

  };

  // const ctrlUpdate = function(){ 
  //   const input = UICtrl.getInput();
  //   console.log(input)
  // }
  return {
    init: function () {
      console.log("App started.");
      setUpListners();
      // ctrlUpdate();
    }
  };
})(UIController);

controller.init();
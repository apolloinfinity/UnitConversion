// document.getElementById("output").style.visibility = "hidden";
// init();
// document.getElementById("lbsInput").addEventListener("input", function(e) {
//   document.getElementById("output").style.visibility = "visible";
//   let lbs = e.target.value;
//   document.getElementById("gramsOutput").innerHTML =
//   document.getElementById("kgOutput").innerHTML =
//   document.getElementById("ozOutput").innerHTML = lbs * 16;
// });

// function massConversion(){
//   let lbsToGrams = (lbs / 0.022046).toFixed(2);
//   let lbsToKilos = (lbs / 2.2046).toFixed(2);
//   let lbsToOz = lbs * 16;
// }

var Conversion;

const UIController = (function() {
  const DOMStrings = {
    _inputNum: "#UnitInput",
    outputGrams: "#gramsOutput",
    outputKilos: "#kgOutput",
    outputOunces: "#ozOutput"
  };

  return {
    getInput: function(){
      return {
        inputNum: document.querySelector(DOMStrings._inputNum).value,
      }
      
      console.log(inputNum);
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

// For testing
// UIController.getInput();

const controller = (function(UICtrl) {
  const setUpListners = function() {
    // Accesses Object with 
    var DOM = UIController.getDOMStrings();
    console.log(DOM._inputNum.value);
  };

  const ctrlUpdate = function(){
    const input = UICtrl.getInput();
  }

  return {
    init: function() {
      console.log("App started.");
      setUpListners();
    }
  };
})(UIController);

controller.init();

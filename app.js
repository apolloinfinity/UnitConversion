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
    const DOM = UIController.getDOMStrings();
    // console.log(DOM)
    const inputVal = document.querySelector(DOM._inputNum);
    inputVal.addEventListener('input', function(e){
      let inputValue = inputVal.value
      document.querySelector(DOM.outputGrams).innerHTML = (inputValue/ 0.022046).toFixed(2);
      document.querySelector(DOM.outputKilos).innerHTML =(inputValue / 2.2046).toFixed(2) ;
      document.querySelector(DOM.outputOunces).innerHTML = (inputValue * 16).toFixed(2);
    })
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

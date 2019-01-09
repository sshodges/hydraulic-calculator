"use strict";
function checkOptions (options, imperialConstant, metricConstant) {
  var answer = {};
  var round = 2;
  var efficiency = 1;
  var constant;

  // Check for unit of measurment
  if(!options.hasOwnProperty("unitType")){
    answer.errorMessage = "No unit of measurment entered";
  } else if (options.unitType.toLowerCase() === "imperial") {
    constant = imperialConstant;
  } else if (options.unitType.toLowerCase() === "metric") {
    constant = metricConstant;
  } else {
    answer.errorMessage += "- Incorrect unit of measurement (metric or imperial) \n";
  }

  //Look for rounding options
  if(options.hasOwnProperty("round") && !isNaN(options.round)){
    round = options.round;
  } else if (options.hasOwnProperty("round")) {
    answer.errorMessage += "- Round variable must be an interger \n";
  }

  //Look for efficiency options
  if(options.hasOwnProperty("efficiency") && !isNaN(options.efficiency) &&
  options.efficiency > 0 && options.efficiency <= 1){
    efficiency = options.efficiency;
  } else if (options.hasOwnProperty("efficiency")){
    answer.errorMessage += "- Efficiency must be greater than 0 and maximium 1 \n";
  }

  return {
    answer: answer,
    round: round,
    efficiency: efficiency,
    constant: constant
  };
}

function pumpFlow (options) {
  // Check options
  var optionsVar = checkOptions(options, 231, 1000);
  var answer = optionsVar.answer;

  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if ((!isNaN(options.displacement)) && (!isNaN(options.speed))){
      // Formula
      var result = ((options.displacement * options.speed * optionsVar.efficiency) / optionsVar.constant);
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else {
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function pumpDisplacement (options) {
  // Check options
  var optionsVar = checkOptions(options, 231, 1000);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.speed)) {
      // Formula
      var result = ((options.flow * optionsVar.constant) / (options.speed * optionsVar.efficiency));
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function pumpPressure (options) {
  // Check options
  var optionsVar = checkOptions(options, 1714, 600);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.power)) {
      // Formula
      var result = ((options.power * optionsVar.constant * optionsVar.efficiency) / (options.flow));
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function inputPower (options) {
  // Check options
  var optionsVar = checkOptions(options, 1714, 600);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.pressure)) {
      // Formula
      var result = ((options.flow * options.pressure) / (optionsVar.constant * optionsVar.efficiency));
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function motorTorque (options) {
  // Check options
  var optionsVar = checkOptions(options, 6.28, 62.8);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.pressure) && !isNaN(options.displacement)) {
      // Formula
      var result = ((options.pressure * options.displacement * optionsVar.efficiency) / optionsVar.constant);
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function motorSpeed (options) {
  // Check options
  var optionsVar = checkOptions(options, 231, 1000);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.displacement)) {
      // Formula
      var result = ((optionsVar.constant * options.flow) / (options.displacement * optionsVar.efficiency));
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function motorDisplacement (options) {
  // Check options
  var optionsVar = checkOptions(options, 231, 1000);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.speed)) {
      // Formula
      var result = ((optionsVar.constant * options.flow) / (options.speed * optionsVar.efficiency));
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function motorPower (options) {
  // Check options
  var optionsVar = checkOptions(options, 63.025, 9549);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.torque) && !isNaN(options.speed)) {
      // Formula
      var result = ((options.torque * options.speed) / optionsVar.constant);
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function cylExtendSpeed (options) {
  // Check options
  var optionsVar = checkOptions(options, 25.4, 1);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.bore)) {
      // Formula
      if (options.unitType === "imperial") {
        options.bore = options.bore * 25.4;
        options.flow = options.flow * 3.785;
      }
      var result = ((options.flow * 4)/(((options.bore / 1000)* (options.bore / 1000)) *3.14159 * 60))/optionsVar.constant;
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function cylRetractSpeed (options) {
  // Check options
  var optionsVar = checkOptions(options, 25.4, 1);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.flow) && !isNaN(options.bore) && !isNaN(options.rod)) {
      // Formula
      if (options.unitType === "imperial") {
        options.bore = options.bore * 25.4;
        options.rod = options.rod * 25.4;
        options.flow = options.flow * 3.785;
      }
      var result = ((options.flow * 4)/(( ((options.bore / 1000)*(options.bore / 1000)) - ((options.rod / 1000)*(options.rod / 1000))) *3.14159 * 60))/optionsVar.constant;
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function cylExtendForce (options) {
  // Check options
  var optionsVar = checkOptions(options, 4.44822271072093, 1);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.pressure) && !isNaN(options.bore)) {
      // Formula
      if (options.unitType === "imperial") {
        options.bore = options.bore * 25.4;
        options.pressure = options.pressure / 14.5038;
      }
      var result = ((((options.bore/1000)*(options.bore/1000))*3.14159*options.pressure*100000)/4)/optionsVar.constant;
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

function cylRetractForce (options) {
  // Check options
  var optionsVar = checkOptions(options, 4.44822271072093, 1);
  var answer = optionsVar.answer;
  // Calculate
  if (!answer.hasOwnProperty("errorMessage")){
    if (!isNaN(options.pressure) && !isNaN(options.bore) && !isNaN(options.rod)) {
      // Formula
      if (options.unitType === "imperial") {
        options.bore = options.bore * 25.4;
        options.rod = options.rod * 25.4;
        options.pressure = options.pressure / 14.5038;
      }
      var result = (((((options.bore/1000)*(options.bore/1000))-((options.rod/1000)*(options.rod/1000)))*3.14159*options.pressure*100000)/4)/optionsVar.constant;
      result = result.toFixed(optionsVar.round);
      answer.result = result;
    } else if (!answer.hasOwnProperty("errorMessage")){
      answer.errorMessage = "Please ensure variables are numbers";
    }
  }
  return answer;
}

module.exports = {
    pumpFlow: pumpFlow,
    pumpDisplacement: pumpDisplacement,
    pumpPressure: pumpPressure,
    inputPower: inputPower,
    motorTorque: motorTorque,
    motorSpeed: motorSpeed,
    motorDisplacement: motorDisplacement,
    motorPower: motorPower,
    cylExtendSpeed: cylExtendSpeed,
    cylRetractSpeed: cylRetractSpeed,
    cylExtendForce: cylExtendForce,
    cylRetractForce: cylRetractForce,
};

function checkOptions (options, imperialConstant, metricConstant) {
  answer = {};
  var round = 2;

  // Check for unit of measurment
  if(!options.hasOwnProperty('unitType')){
    answer.errorMessage = "No unit of measurment entered";
  } else if (options.unitType.toLowerCase() === "imperial") {
    constant = imperialConstant;
  } else if (options.unitType.toLowerCase() === "metric") {
    constant = metricConstant;
  } else {
    answer.errorMessage = "Do not recognise unit of measurement. Please choose between metric or imperial.";
  }

  //Look for rounding options
  if(options.hasOwnProperty('round') && !isNaN(options.round)){
    round = options.round;
  }
  return {
    answer: answer,
    round: round,
    constant: constant
  }

}

function pumpFlow (options) {

  // Check options
  checkOptions = checkOptions(options, 231, 1000);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.displacement) || !isNaN(options.speed)) {
    // Formula
    var result = ((options.displacement * options.speed) / constant)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}

function inputPower (options) {

  // Check options
  checkOptions = checkOptions(options, 1714, 600);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.flow) || !isNaN(options.pressure)) {
    // Formula
    var result = ((options.flow * options.pressure) / constant)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}

function motorTorque (options) {

  // Check options
  checkOptions = checkOptions(options, 6.28, 62.8);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.pressure) || !isNaN(options.displacement)) {
    // Formula
    var result = ((options.pressure * options.displacement) / constant)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}

function motorSpeed (options) {

  // Check options
  checkOptions = checkOptions(options, 231, 1000);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.flow) || !isNaN(options.displacement)) {
    // Formula
    var result = ((constant * options.flow) / options.displacement)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}

function motorPower (options) {

  // Check options
  checkOptions = checkOptions(options, 63.025, 9549);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.torque) || !isNaN(options.speed)) {
    // Formula
    var result = ((options.torque * options.speed) / constant)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}

function pumpDisplacement (options) {

  // Check options
  checkOptions = checkOptions(options, 231, 1000);
  var answer = checkOptions.answer;
  var round = checkOptions.round;
  var constant = checkOptions.constant;

  // Calculate
  if (!isNaN(options.flow) || !isNaN(options.speed)) {
    // Formula
    var result = ((options.flow * constant) / options.speed)
    result = result.toFixed(round);
    answer.result = result;
  } else if (!answer.hasOwnProperty('errorMessage')){
    answer.errorMessage = "Please ensure variables are numbers";
  }

  return answer;
}



module.exports = {
    pumpFlow: pumpFlow,
    inputPower: inputPower,
    motorTorque: motorTorque,
    motorSpeed: motorSpeed,
    motorPower: motorPower,
    pumpDisplacement: pumpDisplacement,
//   cylinderExtendSpeed: cylinderExtendSpeed,
//   cylinderRetractSpeed: cylinderRetractSpeed,
//   cylinderExtendForce: cylinderExtendForce,
//   cylinderRetractForce: cylinderRetractForce,
//   volumeCylinder: volumeCylinder,
//   volumeCube: volumeCube,
//   unitConversions: unitConversions,
};

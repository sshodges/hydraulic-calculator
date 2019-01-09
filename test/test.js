var expect = require('chai').expect;
var hydcalc = require('../lib/index.js');

describe('pumpFlow()', function () {
  it('should return result with no errors', function () {
    var pumpFlow = hydcalc.pumpFlow({
      displacement: 20,
      speed: 1500,
      unitType: "metric",
      round: 1,
      efficiency: .95
    });
    expect(pumpFlow).to.have.property("result");
  });
});

describe('pumpDisplacement()', function () {
  it('should return result with no errors', function () {
    var pumpDisplacement = hydcalc.pumpDisplacement({
      flow: 40,
      speed: 1500,
      unitType: "metric",
      round: 3
    });
    expect(pumpDisplacement).to.have.property("result");
  });
});

describe('pumpPressure()', function () {
  it('should return result with no errors', function () {
    var pumpPressure = hydcalc.pumpPressure({
      flow: 25,
      power: 10,
      unitType: "metric",
      round: 2,
      efficiency: .85
    });
    expect(pumpPressure).to.have.property("result");
  });
});

describe('inputPower()', function () {
  it('should return result with no errors', function () {
    var inputPower = hydcalc.inputPower({
      flow: 20,
      pressure: 185,
      unitType: "metric",
      round: 1
    });
    expect(inputPower).to.have.property("result");
  });
});

describe('motorTorque()', function () {
  it('should return result with no errors', function () {
    var motorTorque = hydcalc.motorTorque({
      displacement: 180,
      pressure: 185,
      unitType: "metric",
      round: 1
    });
    expect(motorTorque).to.have.property("result");
  });
});

describe('motorSpeed()', function () {
  it('should return result with no errors', function () {
    var motorSpeed = hydcalc.motorSpeed({
      flow: 45,
      displacement: 185,
      unitType: "metric",
      round: 1
    });
    expect(motorSpeed).to.have.property("result");
  });
});

describe('motorDisplacement()', function () {
  it('should return result with no errors', function () {
    var motorDisplacement = hydcalc.motorDisplacement({
      flow: 15,
      speed: 200,
      unitType: "metric"
    });
    expect(motorDisplacement).to.have.property("result");
  });
});

describe('motorPower()', function () {
  it('should return result with no errors', function () {
    var motorPower = hydcalc.motorPower({
      torque: 200,
      speed: 200,
      unitType: "metric"
    });
    expect(motorPower).to.have.property("result");
  });
});

describe('cylExtendSpeed()', function () {
  it('should return result with no errors', function () {
    var cylExtendSpeed = hydcalc.cylExtendSpeed({
      flow: 10,
      bore: 5,
      unitType: "imperial"
    });
    expect(cylExtendSpeed).to.have.property("result");
  });
});

describe('cylRetractSpeed()', function () {
  it('should return result with no errors', function () {
    var cylRetractSpeed = hydcalc.cylRetractSpeed({
      flow: 10,
      bore: 5,
      rod: 1,
      unitType: "metric"
    });
    expect(cylRetractSpeed).to.have.property("result");
  });
});

describe('cylExtendForce()', function () {
  it('should return result with no errors', function () {
    var cylExtendForce = hydcalc.cylExtendForce({
      pressure: 10,
      bore: 50,
      unitType: "metric"
    });
    expect(cylExtendForce).to.have.property("result");
  });
});

describe('cylRetractForce()', function () {
  it('should return result with no errors', function () {
    var cylRetractForce = hydcalc.cylRetractForce({
      pressure: 1000,
      bore: 5,
      rod: 1,
      unitType: "imperial"
});
    expect(cylRetractForce).to.have.property("result");
  });
});

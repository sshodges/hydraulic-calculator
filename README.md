# Hydraulic Calculator

This library performs basic hydraulic (fluid power) calculations.

### Installation

```
npm install hydraulic-calculator
```


## Usage

```
const hydcalc = require('hydraulic-calculator')
```

### Pump Flow
  Calculate the output flow for a pump. Answer in lpm or gpm
  ```javascript
  hydcalc.pumpFlow(options);
  ```
  ##### options

  - `displacement`: Displacement of pump in cc/rev or in3/rev
  - `speed`: Speed of pump in RPM
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of pump [default 1]

  ##### Example:

  ```javascript
  hydcalc.pumpFlow({
        displacement: 20,
        speed: 1500,
        unitType: "metric",
        round: 1,
        efficiency: .95
  })
  // Will return
  Object {
    result: "28.5"
  }
  ```
  <br>

### Pump Displacement
  Calculate the displacement of a pump
  ```javascript
  hydcalc.pumpDisplacement(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `speed`: Speed of pump in RPM
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of pump [default 1]

    ##### Example:

  ```javascript
  hydcalc.pumpDisplacement({
        flow: 40,
        speed: 1500,
        unitType: "metric",
        round: 3
  })
  // Will return
  Object {
    result: "26.667"
  }
  ```
  <br>

### Pump Pressure
  Calculate the output pressure of a pump
  ```javascript
  hydcalc.pumpPressure(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `power`: Power of prime mover in kW or hp
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of pump [default 1]

  ##### Example:

  ```javascript
  hydcalc.pumpPressure({
        flow: 25,
        power: 10,
        unitType: "metric",
        round: 2,
        efficiency: .85
  })
  // Will return
  Object {
    result: "204.00"
  }
  ```
  <br>

### Input Power
  Calculate the input power for a pump. Answer in kW or hp
  ```javascript
  hydcalc.inputPower(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `pressure`: Pressure in bar or psi
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of pump [default 1]

  ##### Example:

  ```javascript
  hydcalc.inputPower({
        flow: 20,
        pressure: 185,
        unitType: "metric",
        round: 1
  })
  // Will return
  Object {
    result: "6.2"
  }
  ```
  <br>

### Motor Torque
  Calculate the shaft torque of a hydraulic motor. Answer in Nm or lb-in
  ```javascript
  hydcalc.motorTorque(options);
  ```
  ##### options

  - `displacement`: Displacement of motor
  - `pressure`: Pressure in bar or psi
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of motor [default 1]

  ##### Example:

  ```javascript
  hydcalc.motorTorque({
        displacement: 180,
        pressure: 185,
        unitType: "metric",
        round: 1
  })
  // Will return
  Object {
    result: "530.3"
  }
  ```
  <br>

### Motor Speed
  Calculate the shaft speed of a hydraulic motor. Answer in RPM
  ```javascript
  hydcalc.motorSpeed(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `displacement`: Displacement of motor
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of motor [default 1]

  ##### Example:

  ```javascript
  hydcalc.motorSpeed({
        flow: 45,
        displacement: 185,
        unitType: "metric",
        round: 1
  })
  // Will return
  Object {
    result: "243.2"
  }
  ```
  <br>

### Motor Displacement
  Calculate the displacement of a hydraulic motor. Answer in cc/rev or in3/rev
  ```javascript
  hydcalc.motorDisplacement(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `speed`: Speed in RPM
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of motor [default 1]

  ##### Example:

  ```javascript
  hydcalc.motorDisplacement({
        flow: 15,
        speed: 200,
        unitType: "metric"
  })
  // Will return
  Object {
    result: "75.00"
  }
  ```
  <br>

### Motor Power
  Calculate the output power of a hydraulic motor. Answer in kW or hp
  ```javascript
  hydcalc.motorPower(options);
  ```
  ##### options

  - `torque`: Torque of hydraulic motor in Nm or lb-in
  - `speed`: Speed of hydraulic motor in RPM
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]
  - `efficiency`: Efficiency of motor [default 1]

  ##### Example:

  ```javascript
  hydcalc.motorPower({
        torque: 200,
        speed: 200,
        unitType: "metric"
  })
  // Will return
  Object {
    result: "4.19"
  }
  ```
  <br>

### Cylinder Extend Speed
  Calculate speed of an extending cylinder. Answer in mm/sec or in/sec
  ```javascript
  hydcalc.cylExtendSpeed(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `bore`: Diameter of bore in mm or in
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]

    ##### Example:

  ```javascript
  hydcalc.cylExtendSpeed({
        flow: 10,
        bore: 5,
        unitType: "imperial"
  })
  // Will return
  Object {
    result: "1.96"
  }
  ```
  <br>

### Cylinder Retract Speed
  Calculate speed of a retracting cylinder. Answer in mm/sec or in/sec
  ```javascript
  hydcalc.cylRetractSpeed(options);
  ```
  ##### options

  - `flow`: Flow in lpm or gpm
  - `bore`: Diameter of bore in mm or in
  - `rod`: Diameter of rod in mm or in
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]

    ##### Example:

  ```javascript
  hydcalc.cylRetractSpeed({
        flow: 10,
        bore: 5,
        rod: 1,
        unitType: "metric"
  })
  // Will return
  Object {
    result: "8841.95"
  }
  ```
  <br>

### Cylinder Extend Force
  Calculate the force of an extending cylinder. Answer in N or lbf
  ```javascript
  hydcalc.cylExtendForce(options);
  ```
  ##### options

  - `pressure`: Pressure in bar or psi
  - `bore`: Diameter of bore in mm or in
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]

    ##### Example:

  ```javascript
  hydcalc.cylExtendForce({
        pressure: 10,
        bore: 50,
        unitType: "metric"
  })
  // Will return
  Object {
    result: "1963.49"
  }
  ```
  <br>

### Cylinder Retract Force
  Calculate the force of a retracting cylinder. Answer in N or lbf
  ```javascript
  hydcalc.cylRetractForce(options);
  ```
  ##### options

  - `pressure`: Pressure in bar or psi
  - `bore`: Diameter of bore in mm or in
  - `rod`: Diameter of rod in mm or in
  - `unitType`: Metric or imperial
  - `round`: Round answer to nearest decimal [default 2]

    ##### Example:

  ```javascript
  hydcalc.cylRetractForce({
        pressure: 1000,
        bore: 5,
        rod: 1,
        unitType: "imperial"
  })
  // Will return
  Object {
    result: "18849.50"
  }
  ```

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

  ##### Example:

```javascript
hydcalc.pumpFlow({
      "displacement": 20,
      "speed": 1500,
      "unitType": "metric",
      "round": 1
})
// Will return
Object {
  result: "30.0"
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
  - `round`: Round answer to nearest decimal [optional]

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
  - `round`: Round answer to nearest decimal [optional]

  ##### Example:

```javascript
hydcalc.motorTorque({
      "displacement": 180,
      "pressure": 185,
      "unitType": "metric",
      "round": 1
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
  - `round`: Round answer to nearest decimal [optional]

  ##### Example:

```javascript
hydcalc.motorSpeed({
      "flow": 45,
      "displacement": 185,
      "unitType": "metric",
      "round": 1
})
// Will return
Object {
  result: "243.2"
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
  - `round`: Round answer to nearest decimal [optional]

  ##### Example:

```javascript
hydcalc.motorPower({
      "torque": 200,
      "speed": 200,
      "unitType": "metric"
})
// Will return
Object {
  result: "4.19"
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
  - `round`: Round answer to nearest decimal [optional]

  ##### Example:

```javascript
hydcalc.pumpDisplacement({
      "flow": 40,
      "speed": 1500,
      "unitType": "metric",
      "round": 3
})
// Will return
Object {
  result: "26.667"
}
```

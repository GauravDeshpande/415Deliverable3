# User Model

## Overview
The model can only calculate a single output given a single input for a traffic flow situation.  It is meant to be independent of the application’s environment.  Since it only calculates one input at a time, it allows the user of the model to add and subtract use cases for the model at their own leisure.

### Technical Description

The model is a RESTful services written in Node.js.  In order to access the model, a user must be able to make a RESTful call either via AJAX or Fetch.

The model has three inputs required to be placed in the request body of a POST request:
1. carsPerSec
2. hyperRate
3. cycleLength
4. carInputAmount

On success the model will return two output values.
1. carsThrough
2. carsStopped

At time of writing the access URL is http://localhost:3000/simulate.

### Underlying Equation

The underlying algorithm is the hyperbolic tangent function below.

CPC * tanh(Ax)

Where CPC (carsPerSec) is the rate of vehicles per second through the intersection and A (hyperRate) is the initial acceleration of the vehicles.  To modify the model’s functionality, the user can manipulate these two variables to achieve different and unique outputs.  The final output is the equations integral where the upper limit is equal to a length in time (cycleLength) the user specifies and the lower limit is zero.


### Usage Example

A usage example would be for a 4-way intersection.  When a vehicle approaches the intersection they have three possibilities, turn left, turn right or go straight ahead.  The model would calculate all three of these possibilities independently and then it is up to the user to display the results in their own way.  The user could of course decide that U-turns are a possibility, in which case all they would need to do is calculate a 4th possibility.
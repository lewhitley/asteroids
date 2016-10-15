const Util = require ("./utils.js");
const MovingObject = require ("./moving_object.js");

function Asteroid(pos) {
  const COLOR = "deep pink";
  const RADIUS = 20;
  const vel = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  MovingObject.call(this, {pos: pos, vel: vel, color: COLOR, radius: RADIUS});
};
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

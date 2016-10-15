const Asteroid = require ("./asteroid.js")

const DIM_X = 750;
const DIM_Y = 500;
const NUM_ASTEROIDS = 20;

function Game(ctx) {
  this.ctx = ctx
  this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  let asteroids = [];
  for (let i === 0; i < NUM_ASTEROIDS; i++ ){}

}

Game.prototype.randomPosition = function() {
  return [Math.floor(Math.random() * 750), Math.floor(Math.random() * 500)];
}

Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
  this.asteroids.forEach(asteroid => asteroid.draw(this.ctx));
}

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(asteroid => asteroid.move());
};

module.exports = Game;

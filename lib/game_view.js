const Game = require ("./game.js")

function GameView(ctx) {
  this.game = new Game(ctx);
  this.ctx = ctx;
  console.log("initialize gameview");
};

GameView.prototype.start = function() {
  let that = this
  setInterval(that.game.draw, 20);
  setInterval(that.game.moveObjects, 20);
}

module.exports = GameView;

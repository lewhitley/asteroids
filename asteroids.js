const GameView = require("./lib/game_view.js");

document.addEventListener("DOMContentLoaded", function(event){
  // debugger
  const element = document.getElementById("game-canvas");
  const ctx = element.getContext("2d");
  let view = new GameView(ctx);
  view.start();
})

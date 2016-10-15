/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const GameView = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", function(event){
	  // debugger
	  const element = document.getElementById("game-canvas");
	  const ctx = element.getContext("2d");
	  let view = new GameView(ctx);
	  view.start();
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"./game.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

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


/***/ }
/******/ ]);
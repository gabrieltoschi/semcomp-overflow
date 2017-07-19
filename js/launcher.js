// initialize Phaser game world
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'overflow');

// calculate scale ratio
// 3 is the maximum pixel ratio
// reference: myAsset.scale.setTo(scaleRatio, scaleRatio);
var scaleRatio = window.devicePixelRatio / 3;

// declare global variables
var bgColor = '#FFFFFF';
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// add game states
game.state.add('loader', assetLoader);
game.state.add('scoreboard', scoreboard);

// set game state to LOADER
game.state.start('loader');
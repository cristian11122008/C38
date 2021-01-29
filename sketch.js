var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var cars,car1,car2,car3,car4
var form, player, game;
var distance=0    
var allPlayers                                                                  

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("blue")
  if (playerCount===4){
    game.update(1)
  }
  if (gameState===1){
    game.play()
  }
}

var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var Q1, Q2, Q3, Q4


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}

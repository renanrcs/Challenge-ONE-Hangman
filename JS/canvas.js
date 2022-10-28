import { secretWord, } from "./script.js";
const tabuleiro = document.getElementById('canvas').getContext('2d');

export function drawCanvas(){
   tabuleiro.lineWidth = 6;
   tabuleiro.lineCap = 'round';
   tabuleiro.lineJoin = 'round';
   tabuleiro.fillStyle = '#F3F5FC';
   tabuleiro.strokeStyle = '#0A3871';

   tabuleiro.fillRect(0, 90, 800, 600);
   tabuleiro.beginPath();
   tabuleiro.moveTo(50, 480);
   tabuleiro.lineTo(300, 480);
   tabuleiro.moveTo(100, 480);
   tabuleiro.lineTo(100, 100);
   tabuleiro.moveTo(100, 100);
   tabuleiro.lineTo(250, 100);
   tabuleiro.moveTo(250, 100);
   tabuleiro.lineTo(250, 130);
   tabuleiro.stroke();
   tabuleiro.closePath();
   
}//drawCanvas

export function drawDollHead(x, y, raio, cor){
    tabuleiro.fillStyle = cor;
    tabuleiro.beginPath();
    tabuleiro.arc(x, y, raio, 0, 2 * Math.PI);
    tabuleiro.fill();
}//drawDollHead

export function drawLines(word){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = 'round';
    tabuleiro.lineJoin = 'round';
    tabuleiro.fillStyle = '#F3F5FC';
    tabuleiro.strokeStyle = '#0A3871';
    
    let widthDashedLine = 600/word.length;

    for(let i = 0; i < word.length; i++){
        tabuleiro.moveTo(50+(widthDashedLine*i), 540);
        tabuleiro.lineTo(100+(widthDashedLine*i), 540);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();

}//drawLines

export function clearScreen(){
    tabuleiro.clearRect(0, 0, 800, 600);
}//clearScreen

export function writeCorrectLetter(index){
    tabuleiro.lineWidth = 6;
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = '#000';
    
    let widthLetter = 600/secretWord.length;
    tabuleiro.fillText(secretWord[index], 55 + (widthLetter * index), 535);
}//writeCorrectLetter

export function writeIncorrectLetter(letter, errors){
    tabuleiro.lineWidth = 6;
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = '#F00';

    tabuleiro.fillText(letter, 100 + (40 * (10 - errors)), 590, 40);
}//writeIncorrectLetter

export function drawDollBody(x, y, width){
    tabuleiro.lineWidth = 10;
    tabuleiro.lineCap = 'round';
    tabuleiro.lineJoin = 'round';
    tabuleiro.fillStyle = '#F3F5FC';
    tabuleiro.strokeStyle = '#0A3871';
 
    tabuleiro.beginPath();
    tabuleiro.moveTo(x, y);
    tabuleiro.lineTo(x, y + width);
    tabuleiro.stroke();
    tabuleiro.closePath();
    
 }//drawDollBody
 
 export function drawDollLimbsLeft(x, y, width){
     tabuleiro.lineWidth = 10;
     tabuleiro.lineCap = 'round';
     tabuleiro.lineJoin = 'round';
     tabuleiro.fillStyle = '#F3F5FC';
     tabuleiro.strokeStyle = '#0A3871';
  
     tabuleiro.beginPath();
     tabuleiro.moveTo(x, y);
     tabuleiro.lineTo(x-width, y+width);
     tabuleiro.stroke();
     tabuleiro.closePath();
  }//drawDollLimbsLeft

  export function drawDollLimbsRight(x, y, width){
    tabuleiro.lineWidth = 10;
    tabuleiro.lineCap = 'round';
    tabuleiro.lineJoin = 'round';
    tabuleiro.fillStyle = '#F3F5FC';
    tabuleiro.strokeStyle = '#0A3871';
 
    tabuleiro.beginPath();
    tabuleiro.moveTo(x, y);
    tabuleiro.lineTo(x+width, y+width);
    tabuleiro.stroke();
    tabuleiro.closePath();
 }//drawDollLimbsRight





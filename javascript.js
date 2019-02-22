var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var i;
//if we click on the start/reset button

var start = new Audio();
            start.src = "audio/start.mp3";
            start.src = "audio/start.ogg";
            document.getElementById('startreset').onclick = start.play();

document.getElementById("startreset").onclick=
function(){
    move();
    var start = new Audio();
            start.src = "audio/start.mp3";
            start.src = "audio/start.ogg";
            start.play();
    //if we are playing
    if(playing == true) {      
        location.reload(); //reload page
    }
     //if we are not playing
    else {
        
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        hide("gameover");
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        //reduce time
        //start countdown
        startCountdown();
        
         //generate new Q&A
        
        generateQA();       
    }
}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    //check if we are playing     
    if(playing==true){
        //yes
        if(this.innerHTML==correctAnswer){
            //correct answer
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            //hide wrong box and show correct box
            
            setTimeout(function(){
                document.getElementById("question").style.backgroundColor = "green";
            var correct = new Audio();
            correct.src = "audio/correct.mp3";
            correct.src = "audio/correct.ogg";
            correct.play();
            });
        
            setTimeout(function(){
                document.getElementById("question").style.backgroundColor = "#e6e6e5";},300);
            //Generate new Q&A
            generateQA();
            
        }else{
            //wrong answer
            
            var wrong = new Audio();
            wrong.src = "audio/wrong.mp3";
            wrong.src = "audio/wrong.ogg";
            wrong.play();
            
            setTimeout(function(){
                
                document.getElementById("question").style.backgroundColor = "red";});
            
            
            setTimeout(function(){
                document.getElementById("question").style.backgroundColor = "#e6e6e5";},300);
            }
           }
    }
}

function move() {
    var x = document.getElementById("myAudio");
var y = document.getElementById("myAudio1");
function enableAutoplay() { 
  x.autoplay = true;
  x.load();
}
function enableAutoplay1() { 
  y.autoplay = true;
  y.load();
}
function stopAutoplay() { 
  x.autoplay = false;
    x.load();
}
function stopAutoplay1() { 
  y.autoplay = false;
    y.load();
}
  var elem = document.getElementById("myBar");   
  var width = 100;
  var id = setInterval(frame, 600);
  function frame() {
    if (width <= 0) {
        stopAutoplay1();
      clearInterval(id);
    } else if(width<=42){
      width--; 
      elem.style.width = width + '%';
        elem.innerHTML = timeremaining * 1;
      document.getElementById("myBar").style.backgroundColor = "red";
        stopAutoplay();
        enableAutoplay1();
      }
    else {
      width--; 
      elem.style.width = width + '%';
    elem.innerHTML = 'Time: '+ timeremaining * 1  + ' sec';
        enableAutoplay();
    }
  }
}

var button = document.querySelectorAll("button")[0];
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);


function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        //document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining==0){
            //game over
            stopCountdown();
            show("gameover");
            document.getElementById("myBar").style.backgroundColor = "#4CAF50";
             document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + "</p>";
           //hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
    document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
}   
        
function stopCountdown(){
    clearInterval(action);
}    
doc

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var add1 = 1+Math.round(49*Math.random());
    var add2 = 1+Math.round(49*Math.random());
    var sub1 = 1+Math.round(49*Math.random());
    var sub2 = 1+Math.round(49*Math.random());
    var mul1 = 1+Math.round(9*Math.random());
    var mul2 = 1+Math.round(9*Math.random());
    var div1 = 1+Math.round(98*Math.random());
    var div2 = 1+Math.round(9*Math.random());
    
    var addition = add1 + add2;
    
    var subtraction = subtractionCondition(sub1, sub2);
    
    function subtractionCondition(a, b) {
          if(a>=b && a!=b){
            return a-b;
          }
         else{
            return subtractionCondition(sub1 = 1+Math.round(49*Math.random()),sub2 = 1+Math.round(49*Math.random()));
          }
        }

    var multiplication = multiplicationCondition(mul1,mul2);
    
    function multiplicationCondition(a, b) {
          if(a!=1 && b!=1){
            return a*b;
          }
          else{
            return multiplicationCondition(mul1 = 1+Math.round(9*Math.random()),mul2 = 1+Math.round(9*Math.random()));
          }
        }
    
    var division = divisionCondition(div1, div2);
    
    function divisionCondition(a, b) {
          if(a%b==0 && b!=1 && a!=b){
            return a/b;
          }
          else{
            return divisionCondition(div1 = 1+Math.round(98*Math.random()),div2 = 1+Math.round(9*Math.random()));
          }
        }
    
 
    var z = [addition, subtraction, multiplication, division];
    var los = Math.round(Math.random()*(z.length-1));
    correctAnswer = z[los];
    
    switch(z[los]) {
  case addition:
   document.getElementById("question").innerHTML=add1+"+"+add2;
   break;
 case subtraction:
  document.getElementById("question").innerHTML=sub1+"-"+sub2;
  break;
 case multiplication:
 document.getElementById("question").innerHTML=mul1+"*"+mul2;
break;
 case division:
  document.getElementById("question").innerHTML=div1+"/"+div2;
  break;
  default:
  document.getElementById("question").innerHTML="Error - reset game";
}
     
    var correctPosition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
    //fill one box with the correct answer
    //fill other boxes with wrong answers
    var answers=[correctAnswer];
    for(i=1;i<5;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);}
    }
}

 
var startButton = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time");
var secondsLeft= 60;

var Question1 = document.querySelector("#Q1");
var Question2 = document.querySelector("#Q2");
var Question3 = document.querySelector("#Q3");
var Question4 = document.querySelector("#Q4");

var Submit1 = document.querySelector(".submit-btn1");
var Submit2 = document.querySelector(".submit-btn2");
var Submit3 = document.querySelector(".submit-btn3");
var Submit4 = document.querySelector(".submit-btn4");
var Submit5 = document.querySelector(".submit-btn5");

var answer1 = document.getElementById("B1");
var answer2 = document.getElementById("C2");
var answer3 = document.getElementById("D3");
var answer4 = document.getElementById("A4");

var initials= document.querySelector("#initials");
var highScores= document.querySelector("#highScores");
var score= 0;

var resetButton = document.querySelector(".reset");

var answerCount = localStorage.getItem("correctanswers")

startButton.addEventListener("click", startGame, setTime, showQuestion1);

function startGame() {
    console.log('Game has started!')
   startButton.style.display= "none";
   setTime(), showQuestion1();
}


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        if (secondsLeft === 0) {
            clearInterval (timerInterval);
            timeEl.textContent = "Time is up!"
            stopGame();
            function stopGame() {
                Question1.style.display= "none";
                Question2.style.display= "none";
                Question3.style.display= "none";
                Question4.style.display= "none";
            
                endingFunction();
            }

        }
    }, 1000);

    console.log("The timer is working~");

}
function showQuestion1() {
    Question1.style.display= "inline-block";
    console.log("The first question is displayed");
    
    const cb = document.getElementById('B1');
    console.log(cb.value)


 Submit1.onclick = () => {
    if (answer1.checked === true) {
        showQuestion2();
        console.log("This is correct!")
        save1();
        showQuestion2();
        score++;
    } else if (answer1.checked === false) {
        console.log("wrong!")
     const result = cb.value; 
     save1();
     showQuestion2();
}}
}

function showQuestion2() {
    Question1.style.display= "none";
    Question2.style.display= "inline-block";
    console.log("The second question is displayed");
    
    const cb = document.getElementById('C2');
    console.log(cb.value)

 Submit2.onclick = () => {
    if (answer2.checked === true) {
        console.log("That is correct!")
        save2();
        showQuestion3();
        score++;
    } else if (answer2.checked === false) {
        console.log("wrong!")
     const result = cb.value;
     save2();   
     showQuestion3(); 
}}
}

function showQuestion3() {
    Question2.style.display= "none";
    Question3.style.display= "inline-block";
    console.log("The third question is displayed");
    
    const cb = document.getElementById('C3');
    console.log(cb.value)

 Submit3.onclick = () => {
    if (answer3.checked === true) {
        console.log("That is correct!")
        save3();
        showQuestion4();
        score++
    } else if (answer3.checked === false) {
        console.log("This is wrong!");
        const result = cb.value; 
        save3();
        showQuestion4();
    }}
}

function showQuestion4() {
    Question3.style.display= "none";
    Question4.style.display= "inline-block";
    console.log("The first question is displayed");
    
    const cb = document.getElementById('A4');
    console.log(cb.value)

 Submit4.onclick = () => {
    if (answer4.checked === true) {
        console.log("That is correct!")
        save4();
        endingFunction();
        score++
        clearInterval(timerInterval);
    } else if (answer4.checked === false) {
        console.log("wrong!");
        const result = cb.value;  
        save4();
        endingFunction();
     
    }}
}



//function results () {
   // var initials = document.getElementById ('initials').value;
    //document.write(initials + "'s score")
//}


function endingFunction() {
    Question4.style.display= "none";
    initials.style.display= "inline-block";
    Submit5.onclick = () => {   
    }
    showHighScores ();
}

function showHighScores() {
    initials.style.display= "none";
    highScores.style.display= "inline-block";
    highScores.textContent= "Your score is " + score;
}

function reset() {
    score = 0;
}

resetButton.addEventListener("click", reset)

function save1 (){
    var checkbox = document.getElementById ("B1");
    localStorage.setItem("B1", checkbox.checked);
}
var checked = JSON.parse(localStorage.getItem("B1"));
    document.getElementById("B1").checked = checked

function save2 (){
    var checkbox = document.getElementById ("C2");
    localStorage.setItem("C2", checkbox.checked);
    }
var checked = JSON.parse(localStorage.getItem("C2"));
    document.getElementById("C2").checked = checked

function save3 (){
    var checkbox = document.getElementById ("D3");
    localStorage.setItem("D3", checkbox.checked);
}
var checked = JSON.parse(localStorage.getItem("D3"));
    document.getElementById("D3").checked = checked

function save4 (){
    var checkbox = document.getElementById ("A4");
    localStorage.setItem("A4", checkbox.checked);
}
var checked = JSON.parse(localStorage.getItem("A4"));
    document.getElementById("A4").checked = checked




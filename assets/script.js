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

var answer1 = document.querySelector("#B1:checked") !==null;
var answer2 = document.querySelector("#C2:checked") !==null;
var answer3 = document.querySelector("#D3:checked") !==null;
var answer4 = document.querySelector("#A4:checked") !==null;

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
    if (answer1 == true) {
        console.log("That is correct!")
        showQuestion2();
    } else console.log("wrong!")
     const result = cb.value; 
     answer1.textContent = "That is Correct!"
     showQuestion2();
}
localStorage.setItem("correctanswers", answerCount);
}

function showQuestion2() {
    Question2.style.display= "inline-block";
    console.log("The second question is displayed");
    
    const cb = document.getElementById('C2');
    console.log(cb.value)

 Submit2.onclick = () => {
    if (answer2 === false) {
        console.log("That is correct!")
        showQuestion3();
    } else console.log("wrong!")
     const result = cb.value;   
     showQuestion3(); 
}
localStorage.setItem("correctanswers", answerCount);

}

function showQuestion3() {
    Question3.style.display= "inline-block";
    console.log("The third question is displayed");
    
    const cb = document.getElementById('C3');
    console.log(cb.value)

 Submit3.onclick = () => {
    if (answer3 === false) {
        console.log("That is correct!")
        showQuestion4();
    } else console.log("wrong!")
     const result = cb.value;  
     showQuestion1();  
}
localStorage.setItem("correctanswers", answerCount);
}

function showQuestion4() {
    Question4.style.display= "inline-block";
    console.log("The first question is displayed");
    
    const cb = document.getElementById('A4');
    console.log(cb.value)

 Submit4.onclick = () => {
    if (answer4 === false) {
        console.log("That is correct!")
    } else console.log("wrong!")
     const result = cb.value;  
     
     endingFunction();
}
localStorage.setItem("correctanswers", answerCount);
}


function endingFunction() {

    

}


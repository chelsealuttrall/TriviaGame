//Global Variables
//Q&A
//My objects of questions, answers, possible fake answers, and a tidbit for each.

var count

//$(document).ready(function() {


var question1 = {
    q: "What's the current, accepted plural form of \"Octopus\"?",
    a: "Octopuses",
    p: ["Octopi", "Octopieces", "Octopuses", "Octopus"],
    f: "Geez...if they hung out in plural, imagine all the arms!..But they don't.",
};

var question2 = {
    q: "What color is Octopus blood?",
    a: "Blue",
    p: ["Blue", "Red", "Black", "Brown"],
    f: "Do you still doubt that they're alien?",
};

var question3 = {
    q: "2/3rds of an Octopus's neurons are in it's head",
    a: "False",
    p: ["False", "True", "Sometimes"],
    f: "2/3rds of their neurons are in their arms - making multi-tasking a piece of cake!",
};

var question4 = {
    q: "How many hearts to Octopuses have?",
    a: "3",
    p: ["8", "1", "3", "12"],
    f: "Two pump blood through each of the two gills, while the third pumps blood through the body.",
};

var question5 = {
    q: "Octopus have ______ bones",
    a: "0",
    p: ["0", "8", "24", "5672"],
    f: "The only hard part of their body is their beak (lips)...that's why they can contort so well and they have so many amazing escape stories",
};

var question6 = {
    q: "Which is not a defense mechanism for Octopuses?",
    a: "Supersonic deathray.",
    p: ["Squirting ink at their attackers.", "Color camouflage.", "Mimicking other animals.", "Losing appendages and regrowing like some lizards.", "Supersonic deathray."],
    f: "They are masters of disquise and misdirection...even though no parent teaches them, they live for very short times, and they're color blind! If they use supersonic deathrays, science hasn't witnessed it yet.",
};

var question7 = {
    q: "Aliens--er, I mean Octopuses ______________ with the suckers on their arms.",
    a: "taste",
    p: ["see", "feel", "smell", "taste"],
    f: "Yum...sea floor.",
};

var question8 = {
    q: "The males fertilize the female with sperm via their ______________",
    a: "arm",
    p: ["arm", "penis", "beak", "head"],
    f: "Ahhhh! Sounds so creepy...dare I say...alien!",
};

var question9 = {
    q: "Octopuses can ____________",
    a: "All of the above",
    p: ["Open jars lids", "memorize mazes", "have long term memory", "stow-away to steal food", "squeeze through any opening slightly bigger than their beak", "all of the above"],
    f: "YouTube this stuff! It's crazy to see!",
};

var question10 = {
    q: "Most octopuses live _________.",
    a: "less than a year",
    p: ["less than a year", "40-50 years or more", "over 5 years", "2 months or less"],
    f: "Most have a very short lifespan of 6 months to a year. The males die shortly after mating, and the females die after their babies hatch...bad case of empty nest syndrome!",
};
let currentQuestionIndex = 0;
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let correct = 0
let wrong = 0
let newQuestion

let questionTimer = 1000
    //Question Timer
$("#document").ready().trigger(makeTimer())

function makeTimer() {

    count = 10;

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            console.log("You're out of time")
            currentQuestionIndex++;
            return;
        }
        console.log(count)
        $("#timer").text(count + "seconds left").css("background-color", "white")
    }
    return currentQuestionIndex;
}



//Display Question in HTML
$("#questionsHTML").text(questionArray[currentQuestionIndex].q);

//Multiple Choice Display in HTML
let possibilitiesDiv

let applyRadio = function() {

    for (let i = 0; i < questionArray[currentQuestionIndex].p.length; i++) {
        possibilitiesDiv = $("#choicesHTML").append(`<input type="radio">` + `${questionArray[currentQuestionIndex].p[i]}` + `</input>` + `<br>`);
        $("#choicesHTML").append(possibilitiesDiv);

    }
    console.log(possibilitiesDiv)
}
applyRadio();

//Identify Answer
let correctAnswer = questionArray[currentQuestionIndex].a;
//Identify Answer Index
let correctAnswerIndex = correctAnswer.indexOf(questionArray[currentQuestionIndex].p) //at somewhere??; 

console.log("The correct answer is " + correctAnswer + ", index# " + correctAnswerIndex);


//User's Selection
let choice = $('input[type="radio"]:checked').onSubmit = true; //document.getElementsByType("radio").checked.onSubmit = true;

//Grade Answer
let gradeAnswer = function() {
    if (choice == correctAnswer) {
        correct++
        console.log("correct answers: " + correct)
        currentQuestionIndex++
    } else {
        wrong++
        console.log("wrong answers: " + wrong)
        currentQuestionIndex++
    }
};
gradeAnswer().onSubmit
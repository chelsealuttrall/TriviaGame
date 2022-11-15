//Q&A
//My objects of questions, answers, possible fake answers, and a tidbit for each.
let currentQuestionIndex = 0;
let correct = 0;
let wrong = 0;
let newQuestion;

var question1 = {
    q: "What's the current, accepted plural form of \"Octopus\"?",
    a: "Octopuses",
    p: ["Octopi", "Octopieces", "Octopuses", "Octopus"],
    f: "Geez...if they hung out in plural, imagine all the arms! But they don't.",
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
    q: "How many hearts do Octopuses have?",
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

var question11 = {
    q: "End of Game. You got " + correct + " out of 10 questions correct."
}
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];


//Display Question in HTML
let displayQuestion = function() {
    $("#questionsHTML").text(questionArray[currentQuestionIndex].q);
}
displayQuestion();
//Multiple Choice Display in HTML

let displayChoices = function() {
    $('#choicesHTML').empty();
    for (let i = 0; i < questionArray[currentQuestionIndex].p.length; i++) {
        possibilitiesDiv = $("#choicesHTML").append(`<input name="questions" type="radio">` + `${questionArray[currentQuestionIndex].p[i]}` + `</input>` + `<br>`);
        $("#choicesHTML").append(possibilitiesDiv);
    }
}
displayChoices();

//Answer Finder
let correctAnswer = questionArray[currentQuestionIndex].a;
let correctAnswerIndex = questionArray[currentQuestionIndex].p.indexOf(correctAnswer);
let answerFinder = function(correctAnswerIndex) {
    //Identify Answer
    correctAnswer;
    //Identify Answer Index
    correctAnswerIndex;
    console.log("The correct answer is " + correctAnswer + ", correct answer index# " + correctAnswerIndex);
}
answerFinder();

//Question Timer
var counter; //1000 will  run it every 1 second
var count;

function timer() {
    count = 30;
    counter = setInterval(timer, 1000)
    
    count = count - 1;
    console.log(count)
    if (count == 0) {
       //clearInterval(counter);
        console.log("You're out of time");
        wrong++;
        currentQuestionIndex++;
        currentQuestionIndex;
        if (currentQuestionIndex == 11) {
            clearInterval(counter);
        } else (runAgain());
        
    }
    $("#timer").text(count + "  seconds left").css("background-color", "white");
}
timer();

//Countdown timer repeat and question update
let runAgain = function() {
    console.log("runAgain is connected");
    clearInterval(counter);
    displayQuestion();
    displayChoices();
    answerFinder();
    displayFact();
    // counter = setInterval(timer, 1000)
    timer();
}

//display Fact/Tidbit
let displayFact = function() {
    $("#tidbitHTML").text(questionArray[currentQuestionIndex].f);
}
displayFact();

//User's Selection

var checkedButton = $("#choicesHTML input:radio[name='questions']");
var selectedIndex = checkedButton.index(checkedButton.filter(':checked'));
console.log("selectedIndex" + selectedIndex);

//Grade Answer
let gradeAnswer = function() {
    if (selectedIndex == correctAnswerIndex) {
        correct++
        console.log("correct answers: " + correct)
        currentQuestionIndex++
        runAgain();
    } else {
        wrong++
        console.log("wrong answers: " + wrong)
        currentQuestionIndex++
        runAgain();
    }
};

//Submit Button Function
$("#submitBTN").click(function() {
    console.log("The Button Works");
    gradeAnswer();
});

//Restart Game Button
$("#Restart").click(function() {
    console.log("The Restart Button Works")
});
//Global Variables
//Q&A
//My objects of questions, answers, possible fake answers, and a tidbit for each.

correct = 0

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
let newQuestion
    //Displaying Question in HTML
$("#questionsHTML").text(questionArray[currentQuestionIndex].q);
//Displaying Multiple Choice Selection in HTML
$("#choicesHTML").input.text(questionArray[currentQuestionIndex].p);
//Putting multiple choice selection to radio buttons and displaying.

//Global Variables
//Q&A
//My objects of questions, answers, possible fake answers, and a tidbit for each.

correct = 0

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
let newQuestion
    //Displaying Question in HTML
$("#questionsHTML").text(questionArray[currentQuestionIndex].q);
//Displaying Multiple Choice Selection in HTML
$("#choicesHTML").text(questionArray[currentQuestionIndex].p);
//Putting multiple choice selection to radio buttons and displaying.

//let possibilitiesDiv = $("#choicesHTML").html("<div>");
//
//let applyRadio = function() {
//
//        for (let i = 0; i < questionArray[currentQuestionIndex].p.length; i++) {
//            let possibilityInput = $("<input>").attr("type", "radio").val(questionArray[currentQuestionIndex].p[i]).attr("name", "question" + currentQuestionIndex);
//            let possibilityLabel = $("<label>").text(questionArray[currentQuestionIndex].p[i]);
//            return possibilityInput;
//            return possibilityLabel;
//            return possiblitiesDiv.append(possiblityInput, possibilityLabel, "<br>");
//
//        }
//        applyRadio();




let factDiv

//hide fact
$(factDiv).hide;

//display fact


//$("#tidbitHTML").html(fact(currentQuestionIndex));
//
//function fact(currentQuestionIndex) {
//    //console.log(currentQuestionIndex);
//    let factDiv = $("<div>");
//    //console.log(questionArray)
//    //add fact to page
//    for (let i = 0; i < questionArray[currentQuestionIndex].q.length; i++) {
//        let factDiv = $("#tidbitHTML").append(questionArray[currentQuestionIndex].f[i]);
//        //reveal correct answer
//        correctAnswer();
//        currentQuestionIndex++
//    }
//    return factDiv;
//}



//Determine Correct/Wrong
//
//let correctAnswer = questionArray[currentQuestionIndex].a;
//let correctAnswerIndex = correctAnswer.indexOf;
////console.log("correct answer" + correctAnswerIndex);
//let choice = document.getElementsByName("<radio>").checked.onSubmit = true;
//
//if (choice.val() == correctAnswer.val()) {
//    correct++;
//}
//
//
//
//if $(possibilityLabel).active.indexOf == correctAnswer.onSubmit) {
//    Correct++;
//}
//

//        //push submit and displays fact and correct answer, then new question
//
//        $("#submitBTN").on("click", function(newQuestion) {
//            console.log("submit");
//            $(fact(currentQuestionIndex)).show;
//            //console.log(fact(currentQuestionIndex));
//            return correctAnswer;
//            //currentQuestionIndex = ++.delay(500)
//
//
//        });
//
//    })
//
//
////currentQuestionIndex = ++
////.delay(500), 
//// Loop through questions in order
//
////On click function for selection
//
//
//
//Tally Score

//Now, what do you think? Animal or Alien?
//Read more here: http://www.worldanimalfoundation.net/f/octopus.pd
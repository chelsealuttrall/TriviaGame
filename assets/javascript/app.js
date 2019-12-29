//Global Variables
let newQuestion;

//My objects of questions, answers, possible fake answers
var question1 = {
    q: "What's the current, accepted plural form of \"Octopus\"?",
    a: "Octopuses",
    p: ["Octopi", "Octopieces", "Octopuses", "Octopus"],
    f: "Geez...if they hung out in plural, imagine all the arms!",
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

//display first question
newQuestion = (document.getElementById("questionsHTML").innerHTML = question1.q);

// Loop through questions

//return newQuestion;

//newQuestion = function() {
//  for (i = 0; i < questionsArray.length; i++) {
//      document.getElementById("questionsHTML").innerText = question.q + i;
//    console.log(question.q + i);
//    };

//}

//On click function for selection

//Determine Correct/Wrong

//Tally Score

//Now, what do you think? Animal or Alien?
//Read more here: http://www.worldanimalfoundation.net/f/octopus.pdf
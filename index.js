
const readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("Hey, What's your name? ");
console.log(chalk.bgGreen("Welcome "+ userName +", do you know LOKESH"));

var score = 0;

var highScore = 4;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgYellow("Yeah, It's right. "));
    score++;
  }
  else {
    console.log(chalk.red("No, It's wrong. "));
    score--;
  }

  console.log(chalk.bgCyan("Your current score: "+ score));
  console.log("-----------------------------")
}

var questions =[{
  question: "Where do I live? ",
  answer: "delhi"
},
{
  question: "What is my favourite movie ",
  answer: "Phir Hera Pheri"
},
{
  question: "From where I'm pursuing graduation? ",
  answer: "iitm"
},
{
  question: "which is my favourite sports? ",
  answer: "chess"
},
{
  question: "which is my favourite Code Editor ? ",
  answer: "VS Code"
}
];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("YAY! you scored "+ score);

if(score>= highScore){
  console.log("Oh Yeah, you beat the high score congratulations.");
  console.log(chalk.bgCyan("You know me very well :)"));
}
else {
  console.log("Ohhh, you didn't know me well.");
  
}
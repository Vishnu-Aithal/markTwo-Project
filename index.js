var readLineSync = require("readline-sync")
var chalk = require("chalk")

var currentScore = 0

var highScores =[
  {
    name: "Vishnu",
    score: 5
  },
  {
  name: "Bonda",
  score: 4
  },
  {
    name: "Bajji",
    score: 3
  }
] 

var questionsList = [
  questionOne = {
    question: "Will working on Abdominal muscles reduces belly fat? ",
    answer: false,
    explanation: "Fat is reduced as a whole(think onion peel). The areas where fat gets burned first are determined by genetics, working the underlying muscle might stretch the overlying skin due to hypertrophy, but will not burn fat. You can burn fat only if your calorie intake is lower than calorie expenditure. "
  },
  questionTwo = {
    question: "Does lifting weights make women look masculine? ",
    answer: false,
    explanation: "Lifting weights by women does not make them masculine as they lack the necassary hormones. Infact moderate weight exercises can help burn greater calories than cardio. "
  },
  questionThree = {
    question: "Are all protiens made equal? ",
    answer: false,
    explanation: "Protiens from different sources have different amino acid profiles and different absorption rates. "
  },
    questionFour = {
    question: "Does regular exercising make you feel tired? ",
    answer: false,
    explanation: "Very intense exercise may make you tired, but reguar moderate exercises will leave you energetic and also stabilises mood. If you still feel tired most probably you are dehydrated with depleted electrolytes or you are on a low carb diet. "
  },
    questionFive = {
    question: "Will your muscles turn into fat if you stop exercising? ",
    answer: false,
    explanation: "Muscle and Fat are completely different tissues with different functions. once you stop exercising, you stop burning additional calories, which get stored as fat. Your muscles undergo atrophy because of reduced physical activity. Both the processes are independent of each other."
  }

]


function checkAnswer(userAnswer, correctAnswer){
  if (userAnswer === correctAnswer){
    console.log("\n" + chalk.green("Thats right!"))
    currentScore = currentScore + 1
  }
  else {
    console.log(chalk.red("\n" + "Oops! sorry thats wrong"))
  }
}



console.log("-------------------"+chalk.bgMagenta("CLI Quiz - Fitness Myths Yes/No")+"------------------\n")
var userName = readLineSync.question(chalk.cyan("Please enter your name. "))
console.log(chalk.yellow("Welcome "+chalk.red(userName)+". Let's see how well do you know about general fitness! \nanswer with y/n for YES/NO.\n"))
readLineSync.keyInPause(chalk.inverse("When you are ready, "))
console.log("\n")


for (var qn = 0; qn < questionsList.length; qn++){

  var currentQuestion = questionsList[qn]
  console.log(chalk.blue((qn+1)+") Question"))
  var currentAnswer = readLineSync.keyInYNStrict(currentQuestion.question+" ")
  checkAnswer(currentAnswer, currentQuestion.answer)
  console.log(chalk.grey("\n"+currentQuestion.explanation))

  if(qn === questionsList.length - 1){
     console.log(chalk.inverse("\nYour Final Score is "+ currentScore+"\n"))
  }
  else{
     console.log(chalk.yellow("\n" + "Your Current Score is " + currentScore + "\n"))
    }

}


console.log("Top 3 High Scores:")
console.log(chalk.grey("----------------"))
console.log(highScores[0].name+" - "+highScores[0].score)
console.log(highScores[1].name+" - "+highScores[1].score)
console.log(highScores[2].name+" - "+highScores[2].score)
console.log(chalk.grey("----------------"))
var newHighScore = false
for (var s = 0; s<highScores.length; s++) {

  if (currentScore>highScores[s].score) {
    newHighScore = true
  }
}
if (newHighScore == true){
  console.log(chalk.blue("\nCongratulations you have beaten a high score! \nSend me a screenshot to update the list!"))
}
console.log(chalk.grey("\n Disclaimer:-\nThe explanations for the above questions are just my opinions. Consult a doctor before acting on any of the above stated information"))


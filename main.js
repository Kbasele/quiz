document.addEventListener("DOMContentLoaded", async function (e) {
   

    let questions = await getQuestions();
    let clickCount = 0; 

    document.getElementById("question-btn").addEventListener("click", function(e){
        e.target.innerHTML = "next"
        //questions.setNewQuestion("userAnswer")
        //questions.setNewQuestion("correcAnswer")
        questions.getUserAnswer()
        //questions.getCorrectAnswer()

        //questions.checkIfCorrect(questions.setNewQuestion(), questions.correcAnswers)
        ++clickCount

        

        if(clickCount > 1){
            //console.log(questions.setNewQuestion())
            game.checkIfCorrect(questions.setNewQuestion("userAnswer"), questions.setNewQuestion("correcAnswer"))
            //game.checkIfCorrect(questionInfo.userAnswers,questions.correctAnswers)
        }

        //questions.correctUserAnswer(rightAnswer, lastAnsweredQuestion)
    })

});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.

//let lastAnsweredQuestion = questions.userAnswers[questions.userAnswers.length - 1];
        //let rightAnswer = questions.userAnswers.answers;

        //questions.correctUserAnswer(rightAnswer, lastAnsweredQuestion)


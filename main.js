document.addEventListener("DOMContentLoaded", async function (e) {
   

    let questions = await getQuestions();
    
    document.getElementById("question-btn").addEventListener("click", function(e){
        e.target.innerHTML = "next"
        questions.setNewQuestion()
        let lastAnsweredQuestion = questions.userAnswers[questions.userAnswers.length - 1];
        let rightAnswer = questions.userAnswers.answers;

        questions.correctUserAnswer(rightAnswer, lastAnsweredQuestion)
    })

});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.


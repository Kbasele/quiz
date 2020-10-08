document.addEventListener("DOMContentLoaded", async function (e) {

    let questions = await getQuestions();
    let clickCount = 0; 

    game.setNumOfQuestions()
    
    document.getElementById("question-btn").addEventListener("click", function(e){
        e.target.innerHTML = "next"
        game.showCurrentQuestion()
        ++clickCount
        if(clickCount <= 10){
            questions.setNewQuestion()
        }
        if(clickCount == 1){
            player.getPlayerName()
        }
        if(clickCount>1){
            game.checkIfCorrect()
            game.resetUseranwers()
        }
        if(clickCount == 11){
            game.endGame()
        }
    })
});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.



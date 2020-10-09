document.addEventListener("DOMContentLoaded", async function (e) {

    let questions = await getQuestions();

    game.setNumOfQuestions()

    document.getElementById("question-btn").addEventListener("click", function(e){
        game.turn++
        console.log(game.turn)
        
        e.target.innerHTML = "next"
        game.showCurrentQuestion()
        
        if(game.turn <= 10){
            questions.setNewQuestion()
        }
        if(game.turn == 1){
            game.hideNumOfQuestions()
            player.getPlayerName()
        }
        if(game.turn>1){
            
            game.checkIfCorrect()
            game.resetUseranwers()
        }
        if(game.turn == 11){
            game.endGame()
            game.showCurrentQuestion()
            e.target.innerHTML = "Starta nytt spel"
        }
        if(game.turn == 11){
            game.restart()
        }
    })
});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.



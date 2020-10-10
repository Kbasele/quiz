document.addEventListener("DOMContentLoaded", async function (e) {

    let questions = await getQuestions();

    game.setNumOfQuestions()

    
    document.getElementById("question-btn").addEventListener("click", function(e){
        if(game.clickCount>0){
            
            game.turn++
    
            e.target.innerHTML = "next"
    
            game.showCurrentQuestion()
    
            if(game.turn <= Number(player.playerMountOfQuestsions)){
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
            if(game.turn == Number(player.playerMountOfQuestsions)+1){
                game.endGame()
                game.showCurrentQuestion()
                e.target.innerHTML = "Start new Game"
            }
            if(game.turn == Number(player.playerMountOfQuestsions)+2){
                game.restart()
                
            }
            if(game.turn == Number(player.playerMountOfQuestsions)+3){
                questions.setNewQuestion()
            }
        }

    })
});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.



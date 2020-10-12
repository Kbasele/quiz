document.addEventListener("DOMContentLoaded", async function (e) {
    
    //skapar objekt med alla värden från apit
    let questions = await game.getQuestions();


    //Tar användarens val av hur många frågor som ska visas
    game.setNumOfQuestions()

    
    //håller koll på submitknappet
    document.getElementById("question-btn").addEventListener("click", function(e){

        if(game.clickCount>0){
            
            //håller koll på vilken runda vi är på
            game.turn++
    
            e.target.innerHTML = "next"
            
            //Visar vilken runda vi är på
            game.showCurrentQuestion()
            
            //Visar nya frågor så länge som våran räknare är mindre än antalet frågor som ska ställas 
            if(game.turn <= Number(player.playerMountOfQuestsions)){
                questions.setNewQuestion()
            }
            //Vid första knapptrycket hämtar vi spelarens namn och tar bort det från displayn 
            if(game.turn == 1){
                game.hideNumOfQuestions()
                player.getPlayerName()
            }
            //Checkar svaren och raderar de tidigare värderna, vid true får spelaren ett poäng
            if(game.turn>1){ 
                game.checkIfCorrect(player.playerAnswer, player.PlayerAnswerFacit)
                game.resetUseranwers()
                
            }
            //Avslutar spel och visar poäng och ger spelaren möjlighet att starta om 
            if(game.turn == Number(player.playerMountOfQuestsions)+1){
                game.endGame()
                e.target.innerHTML = "Start new Game"
            }
            //nollställer poängen 
            if(game.turn == Number(player.playerMountOfQuestsions)+2){
                game.restart()
                
            }
            //startar det nya spelet
            if(game.turn == Number(player.playerMountOfQuestsions)+3){
                questions.setNewQuestion()
            }
        }

    })
});




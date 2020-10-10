class QuestionClass {
    constructor(questionsArray) {
        this.questionsArray = [];
        game.turn = 0;
        this.i;
        
            for (let question of questionsArray) {
            this.questionsArray.push(new Question(question));   
        }      
    }
    
    setNewQuestion() { 
        let shownQuestion = document.getElementById("shown-question");
        let shownAnswersUl = document.getElementById("shown-Answers");
        
        shownQuestion.innerHTML = this.questionsArray[game.turn].question;
        
        let resetBtn = document.createElement("input")
        resetBtn.type ="button"
        resetBtn.value ="reset"

        shownAnswersUl.innerHTML = ""

        for(let i = 0; i < Object.values(this.questionsArray[game.turn].answers).length; ++i){
            if(Object.values(this.questionsArray[game.turn].answers)[i] != null){
                let newAnswers = document.createElement("li");
                shownAnswersUl.appendChild(newAnswers)
                shownAnswersUl.appendChild(resetBtn)
                
                newAnswers.innerHTML = Object.values(this.questionsArray[game.turn].answers)[i]
                
                let anotherCount = 0; 

                newAnswers.addEventListener("click", e => {
                    if(anotherCount < 1){
                        this.getPlayerAnswers(i)
                        this.getPlayerAnswerFacit()
                        console.log(player.playerAnswer)
                        console.log(player.PlayerAnswerFacit)
                        newAnswers.style.backgroundColor =  "rgba(65, 105, 225, 0.5)"
                        ++anotherCount
                        resetBtn.addEventListener("click", e => {
                            anotherCount = 0;
                            game.resetUseranwers()
                            newAnswers.style.backgroundColor =  "rgba(182, 182, 182, 0.459)"
                        })
                    }
                })   
            }  
        }
        
    }
    getPlayerAnswers(i){
        player.playerAnswer.push(Object.values(this.questionsArray[game.turn-1].correctAnswers)[i])
        return player.playerAnswer
    }
    getPlayerAnswerFacit(){
        let myArr = Object.values(this.questionsArray[game.turn-1].correctAnswers).filter(answer => answer.includes("true"))
        if(player.PlayerAnswerFacit<1){
            for(let current of myArr){
                player.PlayerAnswerFacit.push(current)
            }
        }
        return player.PlayerAnswerFacit
    }  
}
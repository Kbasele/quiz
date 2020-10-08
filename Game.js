class Game{
    constructor(){
        this.turn = 0; 
    }

    setNumOfQuestions(){
        let numOfQuestions = document.querySelectorAll(".num-question")
        for(let num of numOfQuestions){
            num.addEventListener("click", function(e){
                player.playerMountOfQuestsions = num.innerHTML
                num.style.backgroundColor ="rgba(65, 105, 225, 0.5)"
                num.innerHTML
            })
        }
    }
    checkIfCorrect(){
        let containerFooter = document.getElementById("container-footer")
        let circle = document.createElement("div")
        containerFooter.appendChild(circle)
        circle.innerHTML = ++player.questionNr
        
        
        if(JSON.stringify(player.playerAnswer) == JSON.stringify(player.PlayerAnswerFacit)){
            circle.style.backgroundColor = "rgb(65, 225, 118)"
            ++player.playerScore
            return true
        }
        else{
            console.log("fel")
            circle.style.backgroundColor = "rgb(225, 65, 65)"
            return false
        }
    }
    resetUseranwers(){
        player.playerAnswer = []
        this.usarAnswerFacit = [] 
    }   
    endGame(){
        let body = document.getElementById("question-answers")
        let shownQuestion = document.getElementById("shown-question");
        shownQuestion.innerHTML = "Good job " + player.playerName + "! you scored " + player.playerScore + "/" + player.playerMountOfQuestsions 
        body.setAttribute("class", "hidden")
    }
    showCurrentQuestion(){
        if(this.turn<10){
            this.turn++
            let header = document.getElementById("quiz")
            header.innerHTML = this.turn + "/10"
        }
    }
    showPlayerScore(){
        
    }
    
}; 

let game = new Game
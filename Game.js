class Game{
    constructor(){
        this.turn = 0;
        this.circle;
        this.containerFooter
        
    }
    
    hideNumOfQuestions(){
        let numOfqsn = document.getElementById("num")
        numOfqsn.setAttribute("class", "hidden")
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
        this.containerFooter = document.getElementById("container-footer")
        this.circle = document.createElement("div")
        this.containerFooter.appendChild(this.circle)
        this.circle.innerHTML = this.turn - 1
        
        
        if(JSON.stringify(player.playerAnswer) == JSON.stringify(player.PlayerAnswerFacit)){
            this.circle.style.backgroundColor = "rgb(65, 225, 118)"
            ++player.playerScore
            return true
        }
        else{
            this.circle.style.backgroundColor = "rgb(225, 65, 65)"
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
        if(this.turn<=player.playerMountOfQuestsions){
            let header = document.getElementById("quiz")
            header.innerHTML = this.turn + "/" + player.playerMountOfQuestsions
        }
    }
    restart(){
        this.turn = 0
        player.playerScore = 0 
        var child = this.containerFooter.lastElementChild;  
        while (child) { 
            this.containerFooter.removeChild(child); 
            child = this.containerFooter.lastElementChild; 
        }    
        
    }
    
}; 

let game = new Game
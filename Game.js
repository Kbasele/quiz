class Game{
    constructor(){
        this.turn = 0;
        this.circle;
        this.containerFooter
        this.numOfqsn
        this.showQuestion; 
        this.header;
        this.clickCount = 0; 
    }
    
    hideNumOfQuestions(){

        this.numOfqsn = document.getElementById("num")
        this.numOfqsn.setAttribute("class", "hidden")
    }
    setNumOfQuestions(){
        let numOfQuestions = document.querySelectorAll(".num-question")
        for(let num of numOfQuestions){
            let anotherClickCount = 0;
            num.addEventListener("click", e => {
                this.clickCount++
                if(anotherClickCount <1 && this.clickCount <2){
                    ++anotherClickCount
                    player.playerMountOfQuestsions = num.innerHTML
                    num.style.backgroundColor ="rgba(65, 105, 225, 0.5)"
                    num.innerHTML
                }
                else if(anotherClickCount > 0){
                    anotherClickCount = 0
                    this.clickCount = 0; 
                    player.playerMountOfQuestsions = undefined;
                    num.style.backgroundColor ="rgba(182, 182, 182, 0.459)"
                    num.innerHTML
                }
            })
        }
    }
    checkIfCorrect(playerAnswer, PlayerAnswerFacit ){
        this.containerFooter = document.getElementById("container-footer")
        this.circle = document.createElement("div")
        this.containerFooter.appendChild(this.circle)
        this.circle.innerHTML = this.turn - 1
        
        if(JSON.stringify(playerAnswer) == JSON.stringify(PlayerAnswerFacit) && playerAnswer.length >0){
            this.circle.style.backgroundColor = "rgb(65, 225, 118)"
            ++player.playerScore
            return true
        }

        else{
            console.log(playerAnswer.length)
            this.circle.style.backgroundColor = "rgb(225, 65, 65)"
            return false
        }
    }
    resetUseranwers(){
        player.playerAnswer = []
        this.usarAnswerFacit = [] 
    }   
    endGame(){
        let body = document.getElementById("shown-Answers")
        this.shownQuestion = document.getElementById("shown-question");
        this.header.innerHTML = ""
        this.shownQuestion.innerHTML = "Good job " + player.playerName + "! you scored " + player.playerScore + "/" + player.playerMountOfQuestsions 
        //body.setAttribute("class", "hidden")

        let child = body.lastElementChild;  
        while (child) { 
            body.removeChild(child); 
            child = body.lastElementChild; 
        }

    }
    showCurrentQuestion(){
        if(this.turn<=player.playerMountOfQuestsions){
            this.header = document.getElementById("quiz")
            this.header.innerHTML = this.turn + "/" + player.playerMountOfQuestsions
        }
    }
    restart(){
        this.turn = 0
        player.playerScore = 0 
        this.shownQuestion.innerHTML = ""
        this.numOfqsn.removeAttribute("class")
        let child = this.containerFooter.lastElementChild;  

        while (child) { 
            this.containerFooter.removeChild(child); 
            child = this.containerFooter.lastElementChild; 
        }      
    }
    
}; 

let game = new Game
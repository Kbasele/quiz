class Player{
    constructor(){
        this.playerName
        this.playerAnswer = []
        this.PlayerAnswerFacit = [];
    }
    getPlayerName(playerName){
        let getPlayerName = document.getElementById("nameDivInput")
        this.playerName = getPlayerName.value
        getPlayerName.setAttribute("class", "hidden")
    }
    getPlayerAnswers(){
        player.playerAnswer.push("hej")
        console.log(questions.questionsArray)
    }
}
let player = new Player()


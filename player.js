class Player{
    constructor(){
        this.playerName
        this.playerAnswer
    }
    getPlayerName(playerName){
        let getPlayerName = document.getElementById("nameDivInput")
        this.playerName = getPlayerName.value
        getPlayerName.setAttribute("class", "hidden")
    }
    getPlayerAnswers(){
        
    }
}
let player = new Player()


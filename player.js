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
}
let player = new Player()


//Klass som hanterar det mesta som har med spaleren att göra. 
class Player{
    constructor(){
        this.playerName
        this.playerMountOfQuestsions;
        this.playerScore = 0; 
        this.playerAnswer = []
        this.PlayerAnswerFacit = [];
        
    }
    //Metod som hämtar användares namn
    getPlayerName(playerName){
        let getPlayerName = document.getElementById("nameDivInput")
        this.playerName = getPlayerName.value
        getPlayerName.setAttribute("class", "hidden")
    }
}
//skapar objektet player
let player = new Player()


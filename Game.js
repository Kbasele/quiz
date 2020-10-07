class Game{
    constructor(){
        
    }
    checkIfCorrect(saveUserAnswer, getUserFacit){
        console.log(saveUserAnswer)
        if(saveUserAnswer == getUserFacit){
            console.log("rätt!")
        }
        else{
            console.log("fel!")
        }
    }

    
}; 
let game = new Game()


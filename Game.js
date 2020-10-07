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

    saveUserAnswer(questions, questionsArray,count,i){
        questions.push(Object.values(questionsArray[count-1].correctAnswers)[i])
        console.log(questions)

        return questions
    }
    getUserFacit(usarAnswerFacit, questionsArray,count,i){   
        let facit = Object.values(questionsArray[count-1].correctAnswers).filter(questionsArray => questionsArray.includes("true"));
        if(usarAnswerFacit.length < 1){
            for(let current of facit){
                usarAnswerFacit.push(current)
            }
        }
        console.log(usarAnswerFacit)

        return usarAnswerFacit
    }

    checkIfCorrect(){
        console.log("check")
    }
}; 
let game = new Game()


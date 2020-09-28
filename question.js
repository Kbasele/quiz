class Question{
    constructor(question, answers, alternativs ){
        this.question = question;
        this.answers = answers;
        this.alternativs = alternativs;
    }
    
    //Checks the users answer
    checkAnswer(userAnswer){
        getRandomNumber()
        if(questions[randnmr].answers.includes(userAnswer)){
            return true            
        }
        else {
            return false}
    }
}

function getRandomNumber(){
    randnmr = Math.floor(Math.random()* (5-0) + 0)
    return randnmr
}





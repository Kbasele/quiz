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

//Array that contains all the question objects
let questions = [
    new Question("Hur gammal är Kevin", [26], [25,26,27,28]),
    new Question("Vad heter kevins Flickvänn", "emilia", ["emilia", "daniella", "micki", "karin"]),
    new Question("Vart kommer kevin ifrån", "kongo", ["italien", "thailand", "grekland", "mongoliet"] ),
    new Question("vilka sporter har kevin kört", ["boxning", "mma", "bjj"], ["tennis", "boxning", "mma", "bjj"]),
    new Question("Vilket är kevins favoritfärg", "beige", ["grön", "brun", "beige", "turkos"])
]

function getRandomNumber(){
    randnmr = Math.floor(Math.random()* (5-0) + 0)
    return randnmr
}



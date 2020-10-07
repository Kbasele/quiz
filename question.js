class Question {
    constructor(question) {
        this.question = question.question;
        this.answers = question.answers;
        this.correctAnswers = question.correct_answers;
    }
}

class QuestionClass {
    constructor(questionsArray) {
        this.questionsArray = [];
        this.count = 0; 
        this.userAnswers = [];
        this.usarAnswerFacit = [];
        

        for (let question of questionsArray) {
            this.questionsArray.push(new Question(question));   
        }      
    }
    setNewQuestion() { 
        let shownQuestion = document.getElementById("shown-question");
        let shownAnswersUl = document.getElementById("shown-Answers");

        shownQuestion.innerHTML = this.questionsArray[this.count].question;

        let resetBtn = document.createElement("input")
        resetBtn.type ="button"
        resetBtn.value ="reset"

        shownAnswersUl.innerHTML = ""
        
        for(let i = 0; i < Object.values(this.questionsArray[this.count].answers).length; ++i){
            if(Object.values(this.questionsArray[this.count].answers)[i] != null){
                let newAnswers = document.createElement("li");
                shownAnswersUl.appendChild(newAnswers)
                shownAnswersUl.appendChild(resetBtn)
                
                newAnswers.innerHTML = Object.values(this.questionsArray[this.count].answers)[i]
                
                let clickCount = 0; 
                
                newAnswers.addEventListener("click", e => {
                    if(clickCount < 1){
                        game.saveUserAnswer(this.userAnswers,this.questionsArray,this.count,i)
                        game.getUserFacit(this.usarAnswerFacit,this.questionsArray,this.count,i)
                        newAnswers.style.backgroundColor =  "rgba(65, 105, 225, 0.5)"
                    }
                    ++clickCount
                })
            }
        }
        this.count++
    }
    
}

//resetBtn.addEventListener("click", e =>{
//    clickCount = 0; 
//    anotherCount = 0; 
//    newAnswers.style.backgroundColor = "rgba(182, 182, 182, 0.459)";
//    this.userAnswers = []
//    this.usarAnswerFacit = []   
//})

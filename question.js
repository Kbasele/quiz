

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
        this.correcAnswers = [];

        for (let question of questionsArray) {
            this.questionsArray.push(new Question(question));
            
        }        

    }

    setNewQuestion() {
        this.userAnswers = []
        this.correcAnswers = []
        this.count++
        
        let shownQuestion = document.getElementById("shown-question");
        let shownAnswersUl = document.getElementById("shown-Answers");
        
        let resetBtn = document.createElement("input")
        resetBtn.type ="button"
        resetBtn.value ="reset"

        shownAnswersUl.innerHTML = ""

        let anotherCount = 0;
        
        for(let i = 0; i < Object.values(this.questionsArray[this.count].answers).length; ++i){
            if(Object.values(this.questionsArray[this.count].answers)[i] != null){
                let newAnswers = document.createElement("li");
                shownAnswersUl.appendChild(newAnswers)
                shownAnswersUl.appendChild(resetBtn)
                
                newAnswers.innerHTML = Object.values(this.questionsArray[this.count].answers)[i]
                
                let clickcount = 0; 
                
                newAnswers.addEventListener("click", e => {
                    ++clickcount
                    if(clickcount > 1){
                        clickcount = 0; 
                        
                    }
                    else{
                        resetBtn.addEventListener("click", e =>{
                            clickcount = 0; 
                            anotherCount = 0; 
                            newAnswers.style.backgroundColor = "rgba(182, 182, 182, 0.459)";
                            this.userAnswers = []
                            this.correcAnswers = []

                            //console.log("userAnswer")
                            //console.log(this.userAnswers)
                            //console.log("correctAnwser")
                            //console.log(this.correcAnswers)               
                        })

                        newAnswers.style.backgroundColor =  "rgba(65, 105, 225, 0.5)"
                        
                        this.userAnswers.push(Object.values(this.questionsArray[this.count].correctAnswers)[i])                        
                        anotherCount++  
                        
                        for(let answer of Object.values(this.questionsArray[this.count].correctAnswers)){
                            if(answer == "true" && anotherCount < 2 ){ 
                                this.correcAnswers.push(answer)
                            }
                        }
                        
                        //console.log("userAnswer")
                        //console.log(this.userAnswers)
                        //console.log("correctAnwser")
                        //console.log( this.correcAnswers)
                        
                    }
                })
            }
        }
        shownQuestion.innerHTML = this.questionsArray[this.count].question;
        return this.userAnswers
    }
    //checkIfCorrect(userAnswers, correctAnswers){
    //    this.setNewQuestion()
    //    console.log("Hej")
    //    console.log(this.userAnswers)
    //    if(this.userAnswers === correctAnswers){
    //        console.log("rätt!")
    //        console.log(userAnswers)
    //    }
    //}
//
}



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
        this.userAnswers = []

        for (let question of questionsArray) {
            this.questionsArray.push(new Question(question));
        }
    }

    setNewQuestion() {
        let shownQuestion = document.getElementById("shown-question");
        let shownAnswersUl = document.getElementById("shown-Answers");
        this.count++

        shownAnswersUl.innerHTML = ""

        for(let i = 0; i < Object.values(this.questionsArray[this.count].answers).length; ++i){
            if(Object.values(this.questionsArray[this.count].answers)[i] != null){
                let newAnswers = document.createElement("li");
                shownAnswersUl.appendChild(newAnswers)
                newAnswers.innerHTML = Object.values(this.questionsArray[this.count].answers)[i]

                let clickcount = 0; 
                let answer; 

                newAnswers.addEventListener("click", e => {
                    ++clickcount
                    if(clickcount == 2){
                        console.log("två click")
                        newAnswers.style.backgroundColor = "rgba(182, 182, 182, 0.459)"
                        clickcount = 0; 

                        for(let usersAnswer of this.userAnswers){
                            if(usersAnswer == answer){
                                let userAnswerIndex =  this.userAnswers.indexOf(answer)
                                this.userAnswers.splice(userAnswerIndex, 1)
                                console.log(this.userAnswers)
                            }
                        }
                    }

                    else{
                        newAnswers.style.backgroundColor =  "rgba(65, 105, 225, 0.5)"
                        answer = {
                            question: i,
                            answer: Object.values(this.questionsArray[this.count].answers)[i],
                            correct: Object.values(this.questionsArray[this.count].correctAnswers)[i]
                        }
                        this.userAnswers.push(answer)
                        //console.log(clickcount)
                        
                        //console.log(this.userAnswers)
                    }
                })
            }
        }
        shownQuestion.innerHTML = this.questionsArray[this.count].question;
    }

    correctUserAnswer(correctAnswer, userAnwser){
    }
    
    //correctUserAnswer(correctAnswer, userAnswer)


    

}


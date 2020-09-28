class Play{
    constructor(){
    }

    newQuestion(){

        fetch('https://quizapi.io/api/v1/questions?apiKey=lEfoQQ3KkEZszOPvOwcFQkVXsFN6OXtGDGLZIkWs&limit=10')
        .then(response => response.json())
        .then(data => {
            let shownquestion = document.getElementById("shown-question")
            let answers = document.querySelectorAll(".answer")
            let answerArray = Object.values(data[0].answers)
            shownquestion.innerHTML = data[0].question
            for(let i = 0; i < answers.length; i++){           
                answers[i].innerHTML = answerArray[i]
            }
        }); 
    }

    saveAnswers(){   
    }

}

let play = new Play()

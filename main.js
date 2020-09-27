document.addEventListener("DOMContentLoaded", function (e){
    let random = getRandomNumber()
    

    let shownquestion = document.getElementById("shown-question")
    let answers = document.querySelectorAll(".answer")

    shownquestion.innerHTML = questions[random].question

    for(let i = 0; i < answers.length; i++){
        answers[i].innerHTML = questions[random].alternativs[i]

    }
})
document.addEventListener("DOMContentLoaded", function (e){

    document.getElementById("submit-button").addEventListener("click", function(e){
        play.newQuestion(getRandomNumber());
    })


    let alternativs = document.getElementsByClassName("answer")
    for(alternativ of alternativs){
            alternativ.addEventListener("click", function(e){
                this.style.backgroundColor="rgba(65, 105, 225, 0.5)"
            })
    }
})


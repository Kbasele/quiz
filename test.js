let questions = [
    {
        question: "fråga",
        answers: {
            answer_a: "grej",
            answer_b: "sak",
        },
        correct_answers: {
            answer_a: true,
            answer_b: false,
        },
        multiple_answers: false
    },
    {
        question: "fråga",
        answers: {
            answer_a: "epic",
            answer_b: "wow",
            answer_c: "lol",
            answer_d: "haha",
        },
        correct_answers: {
            answer_a: true,
            answer_b: true,
            answer_c: true,
            answer_d: false,
        },
        multiple_answers: true
    }
]

let userAnswers = [
    {
        answer: "grej"
    },
    {
        answer: "epic"
    },
    {
        answer: "wow"
    },
    {
        answer: "lol"
    },
]

let userAnswers3 = [
    ["answer_a"],
    ["answer_a", "answer_b", "answer_c"]
]

function checkAnswers(questions, userAnswers) {
    let corrected = [];

    questions.forEach((question, i) => {
        let answers = userAnswers[i];
        let correctedQuestion = [];

        answers.forEach(answer => {
            let isCorrect = question.correct_answers[answer];
            correctedQuestion.push(isCorrect);
        })
        
        corrected.push(correctedQuestion);
    })

    return corrected;
}

let corrected = checkAnswers(questions, userAnswers3);

[
    [true],
    [true, true]
]

corrected.forEach(isCorrect => {
    console.log(isCorrect);
})

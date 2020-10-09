function getQuestions() {
    return fetch("https://quizapi.io/api/v1/questions?apiKey=CgSd9j96n4XlAAfeYchpItsVhznIFdTUcsYFiEny&limit=1000")
    .then((response) => response.json())
    .then((fetchedData) => {
        let questions = new QuestionClass(fetchedData);
        return questions;
    });
}

// Fetch returnerar promise, question = promise.

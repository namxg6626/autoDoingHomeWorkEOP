let submitButton = document.querySelector('#dSubmit');
let viewAnswerButton = document.querySelector('#dViewAnswer');
let answerBoxes = document.querySelectorAll('.dinline');
if (answerBoxes.length != 0) {
    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].value = 'draft';
    }
    submitButton.click();
    setTimeout(function () {
        viewAnswerButton.click();
    }, 3000); // min: 3000

    setTimeout(function () {
        let answerArray = [];
        answerBoxes = document.querySelectorAll('.dinline');
        for (let correctAnswer of answerBoxes)
            answerArray.push(correctAnswer.value);

        console.log(answerArray);
        viewAnswerButton.click();

        for (let i = 0; i < answerBoxes.length; i++)
            answerBoxes[i].value = answerArray[i];
        submitButton.click();
    }, 4000) // min: 4000
}
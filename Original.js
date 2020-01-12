// main
setInterval(function () {
    submitButton = document.querySelector('#dSubmit');
    viewAnswerButton = document.querySelector('#dViewAnswer');
    let answerBoxes = document.querySelectorAll('.dinline');
    let checkCells = document.querySelectorAll('.ques > div > p > div > ins');
    let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');

    if (answerBoxes.length != 0)
        autoTyping(answerBoxes);

    else if (checkCells.length != 0)
        autoCheckBox(checkCells);

    else if (playButton.length != 0)
        autoVocabularySpeaking(playButton);

    else setTimeout(function () {
        submitButton.click();
    }, 1000) // min: 1000
}, 2000); // min: 2000


// define function
function autoTyping(answerBoxes) {
    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].value = 'draft';
    }
    submitButton.click();
    viewAnswerButton.click();

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
    }, 1000) // min: 1000
}

function autoCheckBox(checkCells) {
    for (let i = 0; i < checkCells.length; i++) {
        checkCells[i].click();
    }
    submitButton.click();
    viewAnswerButton.click();

    // refresh checkCells, remember correct answer to check
    setTimeout(function () {
        let answerArray = []
        let checkCells = document.querySelectorAll('.ques > div > p > div > ins');
        for (let i = 0; i < checkCells.length; i++)
            if (checkCells[i].offsetParent.classList.contains('checked'))
                answerArray.push(i);
        console.log('correct answer:', answerArray);
        viewAnswerButton.click();
        for (let i of answerArray) {
            checkCells[i].click();
        }
        submitButton.click();
    }, 1000); // min: 1000
}

function autoVocabularySpeaking(playButton) {
    for (let i = 0; i < playButton.length; i++) {
        playButton[i].click();
    }
    submitButton.click();
}

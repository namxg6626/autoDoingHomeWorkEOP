function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

begin();

async function begin() {
    await timeout(1000); // period time: ms
    submitButton = document.querySelector('#dSubmit');
    viewAnswerButton = document.querySelector('#dViewAnswer');
    let answerBoxes = document.querySelectorAll('.dinline');
    let checkCells = document.querySelectorAll('.ques > div > p > div > ins');
    let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');

    await Promise.all([
        autoTyping(answerBoxes),
        autoCheckBox(checkCells),
        autoVocabularySpeaking(playButton),
    ])

    submitButton.click();
    await timeout(1000);
    begin();
}

// define function
async function autoTyping(answerBoxes) {
    if (!answerBoxes.length) return;
    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i].value = 'draft';
    }
    await timeout(500);
    submitButton.click();
    await timeout(500);
    viewAnswerButton.click();

    await timeout(1000);
    let answerArray = [];
    answerBoxes = document.querySelectorAll('.dinline');
    for (let correctAnswer of answerBoxes)
        answerArray.push(correctAnswer.value);

    console.log(answerArray);
    await timeout(500);
    viewAnswerButton.click();

    for (let i = 0; i < answerBoxes.length; i++)
        answerBoxes[i].value = answerArray[i];
}

async function autoCheckBox(checkCells) {
    if (!checkCells.length) return;
    for (let i = 0; i < checkCells.length; i++) {
        checkCells[i].click();
    }
    submitButton.click();
    await timeout(500);
    viewAnswerButton.click();

    // refresh checkCells, remember correct answer to check
    await timeout(1000);
    let answerArray = []
    checkCells = document.querySelectorAll('.ques > div > p > div > ins');
    for (let i = 0; i < checkCells.length; i++)
        if (checkCells[i].offsetParent.classList.contains('checked'))
            answerArray.push(i);

    console.log('correct answer:', answerArray);
    await timeout(500);
    viewAnswerButton.click();
    for (let i of answerArray)
        checkCells[i].click();
}

async function autoVocabularySpeaking(playButton) {
    if (!playButton.length) return;
    for (let i = 0; i < playButton.length; i++) {
        playButton[i].click();
    }
}

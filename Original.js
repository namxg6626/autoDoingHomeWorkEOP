setInterval(function () {
    let submitButton = document.querySelector('#dSubmit');
    let viewAnswerButton = document.querySelector('#dViewAnswer');
    let answerBoxes = document.querySelectorAll('.dinline');
    let checkCells = document.querySelectorAll('.ques > div > p > div > ins');

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
    else if (checkCells.length != 0) {
        for (let i = 0; i < checkCells.length; i++) {
            checkCells[i].click();
        }
        submitButton.click();

        // view answer
        setTimeout(function () {
            viewAnswerButton.click();
        }, 2000); // min: 2000

        // refresh checkCells, remember correct answer to check
        let answerArray = []
        setTimeout(function () {
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
        }, 3300); // min: 3300
    } else setTimeout(function() {
        submitButton.click(); 
    }, 3000) // min: 3000
}, 300000); // min: 10000

setInterval(function () {
    let submitButton = document.querySelector('#dSubmit');
    let viewAnswerButton = document.querySelector('#dViewAnswer');
    let answerBoxes = document.querySelectorAll('.dinline');
    if (answerBoxes != null) {
        for (let i = 0; i < answerBoxes.length; i++) {
            answerBoxes[i].value = 'draft';
        }
        submitButton.click();
        setTimeout(function () {
            viewAnswerButton.click();
        }, 3000); // do not change delay time
    
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
        }, 4000)
    }
    else submitButton.click();
}, 10000);

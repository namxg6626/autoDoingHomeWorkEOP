let checkCells = document.querySelectorAll('.ques > div > p > div > ins');
let submitButton = document.querySelector('#dSubmit');
let viewAnswerButton = document.querySelector('#dViewAnswer');

console.log(checkCells);
// check full boxes in order to view answer
for (let i = 0; i < checkCells.length; i++) {
    checkCells[i].click()
}
submitButton.click();

// view answer
setTimeout(function () {
    viewAnswerButton.click();
}, 2000);

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
}, 3300)

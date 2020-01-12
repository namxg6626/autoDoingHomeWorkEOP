let answerTable = document.querySelectorAll('#dmcq > dvoca');
let answerButton = document.querySelectorAll('.dans a');
let submitButton = document.getElementById('dSubmit');

for (let i = 0; i < answerTable.length; i++) {
    answerButton[i].click();
}
setTimeout(function () {
    submitButton.click();
}, 5000)

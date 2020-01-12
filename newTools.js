let viewAnswerButton = document.getElementById('dViewAnswer');
let answerBoxes = document.querySelectorAll('.dinline')

let click = setInterval(function () {
    while (answerBoxes[0].value == "") {
        viewAnswerButton.click();
        answerBoxes = document.querySelectorAll('.dinline')
    }
}, 300)
if (answerBoxes[0].value != "") {
    clearInterval(click);
}

// let answerArray = []
// while(answerBoxes[0].value == "") {
//     answerBoxes = document.querySelectorAll('.dinline')
// }
// for (let answer of answerBoxes) {
//     answerArray.push(answer.value)
// }

// console.log(answerArray);

let answerButton = document.querySelectorAll('.dans a');
for (let i = 0; i < answerButton.length; i++) {
    setTimeout(function () {
        answerButton[i].click()
    }, i * 800)
}
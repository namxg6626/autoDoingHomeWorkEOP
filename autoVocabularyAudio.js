let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');
let submitButton = document.querySelector('#dSubmit');
if (playButton.length != 0)
    for (let i = 0; i < playButton.length; i++) {
        setTimeout(function () {
            playButton[i].click();
        }, i * 2000);
    }
    // for (let i = 0; i < playButton.length; i++) {
    //     playButton[i].click();
    // }
    // submitButton.click();
var submit = document.querySelector('#dSubmit');

function playAudio() {
    // let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');
    // let submit = document.querySelector('#dSubmit');
    // for (let i = 0; i < playButton.length; i++) {
    //     playButton[i].click();
    // }
    // setTimeout(function () {
    //     submit.click();
    // }, 3000);
    setTimeout(function () {
        let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');
        for (let i = 0; i < playButton.length; i++) {
            playButton[i].click();
        }
        submit.click();
    }, 3000);
}
playAudio();
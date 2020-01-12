let playButton = document.querySelectorAll('#mbody > .default > .row .daudio');
let submitButton = document.querySelector('#dSubmit');
if (playButton.length == 0)
    location.reload()

setInterval(function () {
    for (let i = 0; i < playButton.length; i++) {
        setTimeout(function () {
            playButton[i].click();
        }, i * 2000);
    }
}, playButton.length * 2000)

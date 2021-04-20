console.log('Starting Up');

var keys = document.getElementsByClassName('.key');

window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio && audio.play();
    const keyEle = document.querySelector(`div[data-key="${e.keyCode}"]`);
    keyEle.classList.add('keyDown');
})

window.addEventListener('keyup', function(e) {
    const keyEle = document.querySelector(`div[data-key="${e.keyCode}"]`);
    keyEle && keyEle.classList.remove('keyDown');
})

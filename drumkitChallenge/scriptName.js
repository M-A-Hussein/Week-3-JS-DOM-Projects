

window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime= 0;
    audio.play();
    box.classList.add('animation');
});

stopTransition = (event) => {
    if (event.propertyName != 'transform') return;
    event.target.classList.remove('animation');
}
const box = document.querySelectorAll('.box');
box.forEach(box => box.addEventListener('transitionend', stopTransition));








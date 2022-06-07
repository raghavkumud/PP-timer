var user1 = {
    timer: 0,
    id: 0
}
var user2 = {
    timer: 0,
    id: 0
}
function setTimeValue(user) {
    let timer = user.timer;
    const timerElement = document.getElementById('tblock');
    let hours = Math.round(timer / 3600);
    timer = timer % 3600
    let minutes = Math.round(timer / 60);
    timer = timer % 60;
    let seconds = Math.round(timer);
    let currentValue = hours.toString(10).padStart(2, '0') + ":" + minutes.toString(10).padStart(2, '0') + ":" + seconds.toString(10).padStart(2, '0');
    timerElement.innerHTML = currentValue;

}
function increase(user) {
    user.timer += 1;
    console.log(user.timer);
    setTimeValue(user);
}

var id1;
var id2;
function start(user) {
    user.id = setInterval(increase, 1000, user);
    const element = document.getElementById('start');
    element.disabled = true;
}
function stop(user) {
    clearInterval(user.id);
    setTimeValue(user);
    const element = document.getElementById('start');
    element.disabled = false;
}
function reset(user) {
    clearInterval(user.id);
    user.timer = 0;
    setTimeValue(user);
    const element = document.getElementById('start');
    element.disabled = false;
}
const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click',
    function () {
        stop(user1)
    });
const startButton = document.getElementById('start');
startButton.addEventListener('click',
    function () {
        start(user1);
    });
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',
    function () {
        reset(user1);
    });









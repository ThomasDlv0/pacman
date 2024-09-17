/*
Mes variables
 */

var pacman = document.getElementById('pacman');
var playground = document.getElementById('playground');
var containerPilule = document.getElementsByClassName('container-pilule');
var x = 0;
var y = 0;
var step = 100;
var playgroundWidth = playground.clientWidth;
var playgroundHeight = playground.clientHeight;
var pacmanSize = pacman.clientWidth;
var mc = new Hammer(playground);
var i = 0;


// Mon programme

mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL});

function movePacman(direction) {
    switch (direction) {
        case 'left':
            x = Math.max(0, x - step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(-1)';
            break;
        case 'right':
            x = Math.min(playgroundWidth - pacmanSize, x + step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(1)';
            break;
        case 'up':
            y = Math.max(0, y - step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(-90deg)';
            break;
        case 'down':
            y = Math.min(playgroundHeight - pacmanSize, y + step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(90deg)';
            break;
    }
}


mc.on('swipeleft swiperight swipeup swipedown', (event) => {

    switch (event.type) {
        // left
        case 'swipeleft':
            movePacman(direction = 'left');
            break;
        // right
        case 'swiperight':
            movePacman(direction = 'right');
            break;
        // up
        case 'swipeup':
            movePacman(direction = 'up');
            break;
        // down
        case 'swipedown':
            movePacman(direction = 'down');
            break;
    }
    console.log(event.type);
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        // left
        case 'q':
        case 'ArrowLeft':
            movePacman(direction = 'left');
            break;
        // right
        case 'd':
        case 'ArrowRight':
            movePacman(direction = 'right');
            break;
        // up
        case 'z':
        case 'ArrowUp':
            movePacman(direction = 'up');
            break;
        // down
        case 's':
        case 'ArrowDown':
            movePacman(direction = 'down');
            break;
    }
});

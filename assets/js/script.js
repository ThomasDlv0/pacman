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


mc.on('swipeleft swiperight swipeup swipedown', (event) => {

    switch (event.type) {
        // left
        case 'swipeleft':
            x = Math.max(0, x - step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(-1)';
            break;
        // right
        case 'swiperight':
            x = Math.min(playgroundWidth - pacmanSize, x + step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(1)';
            break;
        // up
        case 'swipeup':
            y = Math.max(0, y - step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(-90deg)';
            break;
        // down
        case 'swipedown':
            y = Math.min(playgroundHeight - pacmanSize, y + step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(90deg)';
            break;
    }
    console.log(event.type);
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        // left
        case 'q':
        case 'ArrowLeft':
            x = Math.max(0, x - step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(-1)';
            break;
        // right
        case 'd':
        case 'ArrowRight':
            x = Math.min(playgroundWidth - pacmanSize, x + step);
            pacman.style.left = x + 'px';
            pacman.style.transform = 'scaleX(1)';
            break;
        // up
        case 'z':
        case 'ArrowUp':
            y = Math.max(0, y - step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(-90deg)';
            break;
        // down
        case 's':
        case 'ArrowDown':
            y = Math.min(playgroundHeight - pacmanSize, y + step);
            pacman.style.top = y + 'px';
            pacman.style.transform = 'rotate(90deg)';
            break;
    }
});

let randomIndex;
let hit = true;
let isStarted = false;
let interval;

const soundOn = document.getElementById('sound-btn');
const bu = document.getElementById('sound-bu');
const zombieImg = document.createElement('img');
zombieImg.src = 'images/zombie.png';
const hitImg = document.createElement('img');
hitImg.src = 'images/blood.png';
const startBtn = document.getElementById('start-btn');
const shot = document.getElementById('sound-shot');
const missCount = document.getElementById('miss-counter');
const hitCount = document.getElementById('hit-counter');
const items = document.querySelectorAll('.item');

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// const miss = document.getElementById('container');
// miss.onclick = () => {
//     missCount.innerText++
// }

startBtn.onclick = ()=>{
    if (!isStarted) {
        isStarted = true;
        playGame();
        startBtn.innerHTML = 'GAME OFF';
        bu.play();
        soundOn.innerHTML = 'SOUND OFF';
    }else{
        isStarted = false;
        startBtn.innerHTML = 'START';
        clearInterval(interval);
        hitImg.remove();
        zombieImg.remove();
        hitCount.innerText = 0;
        missCount.innerText = 0;
        bu.pause();
        bu.currentTime = 0;
        soundOn.innerHTML = 'SOUND ON';
    }
};

soundOn.onclick = function () {
    if (bu.currentTime) {
        bu.pause();
        bu.currentTime = 0;
        soundOn.innerHTML = 'SOUND ON';
    }else{
        soundOn.innerHTML = 'SOUND OFF';
        bu.play();
    }
}

zombieImg.onclick = function () {
    hit = true;
    shot.currentTime = 0;
    shot.play();
    zombieImg.remove();
    items[randomIndex].append(hitImg);
    hitCount.innerText++
}

function playGame(){
    randomIndex = getRandomIndex(items);
    items[randomIndex].append(zombieImg);
    interval = setInterval(function () {
        if (hit){
            hit = false;
        } else {
            missCount.innerText++
        }

        randomIndex = getRandomIndex(items);
        items[randomIndex].append(zombieImg);
        hitImg.remove();
    }, 1000);
}






